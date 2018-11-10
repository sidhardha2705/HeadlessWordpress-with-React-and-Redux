<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'headlesswordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'q=0!,tY/sHG>j*/RX [hWs3G7:-5ppA!y*@Edz^o=%Ll49G9(W78Wb+xLzA[e-d%');
define('SECURE_AUTH_KEY',  '~y7A>et`kKqqSc659jO)GZ;MB[tlo0C8eOjNK,DT1a]1cVe{MgolmM<-/pD6Q#LO');
define('LOGGED_IN_KEY',    'wEE+Lc`yugl|bdm@/9l[x=?>9rP&-l[Y)j~QU.f2BP6yK|yuT)~w>tO K;F1]!6C');
define('NONCE_KEY',        'Aw11UBu+,L9OD BC;4Nk}$=n1^MY6]w3S8C)N1#(@)le1F[QnmIZ!OC.1GmrG#e.');
define('AUTH_SALT',        '0O3.,aRtZg,[zgLT9>`=!^HlbQf*]!`qAiI#DuDw3lp]n0diwd?*_o,72]R-DJ@:');
define('SECURE_AUTH_SALT', '=x#+b5(%dGTbcvgquCn6Mqy([-*$K6:P(Nu;gL3+}`1Ez/Wow~3+PIyjz]E_<P!l');
define('LOGGED_IN_SALT',   'DLT9muH=o(9iXX ?<3s{~Q/|F-{*E)L9:1momMh>TpUtSCd4w$fwQ?PKQ|4.Oi/x');
define('NONCE_SALT',       '4X07b:SOMtSv[^T<0u$G;+kic+Gy{-CA3v3DOr3Db?|n;8%F-4}_D{qdxux#BqeP');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
