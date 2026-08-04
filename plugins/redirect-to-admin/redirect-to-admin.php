<?php
/**
 * Plugin Name: Redirigir Home a Admin
 * Description: Redirecciona el home del sitio a wp-admin y agrega headers para evitar indexación por buscadores.
 * Version: 1.0.0
 * Author: Parque de Descanso
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Redirige el home y el feed principal a wp-admin.
 */
add_action( 'template_redirect', function () {
	// Evitar bucles: si ya estamos en el área de administración o login, no hacer nada.
	if ( is_admin() || wp_doing_ajax() || wp_doing_cron() ) {
		return;
	}

	// Si estamos en la página de inicio o en el feed principal, redirigir.
	if ( is_front_page() || is_home() ) {
		wp_safe_redirect( admin_url(), 302 );
		exit;
	}
} );

/**
 * Agrega header X-Robots-Tag para evitar indexación en TODO el sitio.
 */
add_action( 'send_headers', function () {
	if ( ! is_admin() && ! wp_doing_ajax() && ! wp_doing_cron() ) {
		header( 'X-Robots-Tag: noindex, nofollow, noarchive', true );
	}
} );

/**
 * Desactiva la generación del sitemap de WordPress.
 */
add_filter( 'wp_sitemaps_enabled', '__return_false' );
