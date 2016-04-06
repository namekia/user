<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class GreenBoxShortcode extends Shortcode
{
    function init()
    {
        $this->shortcode->getHandlers()->add('greenbox', function(ShortcodeInterface $sc) {

            // Add assets
            $this->shortcode->addAssets('css', 'plugin://shortcode-greg/css-compiled/sc-sandboxTwo.css');
            $output = $this->twig->processTemplate('partials/sc-greenbox.html.twig', [
                'shortcode' => $sc,
            ]);

            return $output;
        });
    }
}
