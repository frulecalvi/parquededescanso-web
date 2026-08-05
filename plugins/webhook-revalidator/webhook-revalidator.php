<?php
/**
 * Plugin Name: Webhook Revalidator
 * Description: Dispara webhooks al frontend de Next.js cuando se actualizan Custom Post Types, para revalidar ISR.
 * Version: 1.0.0
 * Author: Parque de Descanso
 */

if (!defined('ABSPATH')) {
    exit;
}

class Webhook_Revalidator {

    private const CPT_TO_TAG = [
        'inicio'              => 'inicio',
        'servicios'           => 'servicios',
        'preguntas-frecuentes'=> 'faq',
        'nuestro-parque'      => 'nuestro-parque',
        'salas-velatorias'    => 'salas-velatorias',
        'crematorio'          => 'crematorio',
    ];

    private const CPT_TO_PATH = [
        'inicio'              => '/',
        'servicios'           => '/servicios',
        'preguntas-frecuentes'=> '/servicios',
        'nuestro-parque'      => '/nuestro-parque',
        'salas-velatorias'    => '/salas-velatorias',
        'crematorio'          => '/crematorio',
    ];

    private string $webhook_url;
    private string $webhook_secret;

    public function __construct() {
        $this->webhook_url    = getenv('WEBHOOK_URL') ?: '';
        $this->webhook_secret = getenv('WEBHOOK_SECRET') ?: '';

        add_action('save_post', [$this, 'on_save_post'], 10, 3);
    }

    public function on_save_post(int $post_id, WP_Post $post, bool $update): void {
        // Evitar ejecución durante importaciones, autosaves, revisiones
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (defined('DOING_CRON') && DOING_CRON) {
            return;
        }
        if (wp_is_post_revision($post_id)) {
            return;
        }
        if (!$update) {
            // Solo actualizaciones, no creaciones (si querés también creaciones, sacá esta línea)
            // return;
        }

        $cpt = $post->post_type;

        if (!isset(self::CPT_TO_TAG[$cpt])) {
            return;
        }

        if (empty($this->webhook_url) || empty($this->webhook_secret)) {
            error_log('Webhook Revalidator: WEBHOOK_URL o WEBHOOK_SECRET no están configurados.');
            return;
        }

        $tag  = self::CPT_TO_TAG[$cpt];
        $path = self::CPT_TO_PATH[$cpt] ?? null;
        $this->send_revalidation($tag, $path);
    }

    private function send_revalidation(string $tag, ?string $path): void {
        $payload = json_encode([
            'tag'  => $tag,
            'path' => $path,
        ]);

        $args = [
            'method'  => 'POST',
            'headers' => [
                'Content-Type'  => 'application/json',
                'Authorization' => 'Bearer ' . $this->webhook_secret,
            ],
            'body'    => $payload,
            'timeout' => 10,
        ];

        $response = wp_remote_post($this->webhook_url, $args);

        if (is_wp_error($response)) {
            error_log('Webhook Revalidator error: ' . $response->get_error_message());
            return;
        }

        $status = wp_remote_retrieve_response_code($response);
        if ($status !== 200) {
            $body = wp_remote_retrieve_body($response);
            error_log("Webhook Revalidator error: HTTP {$status} - {$body}");
        }
    }
}

new Webhook_Revalidator();
