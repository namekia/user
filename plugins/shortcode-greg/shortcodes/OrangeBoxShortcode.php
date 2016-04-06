<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class OrangeBoxShortcode extends Shortcode
{
    function init()
    {
        $this->shortcode->getHandlers()->add('orangebox', function(ShortcodeInterface $sc) {

            // Add assets
            $this->shortcode->addAssets('css', 'plugin://shortcode-greg/css-compiled/sc-sandboxTwo.css');

            $hash = $this->shortcode->getId($sc);

            $output = $this->twig->processTemplate('partials/sc-orangebox.html.twig', [
                'hash' => $hash,
                'position' => $sc->getParameter('position', 'right'),
                'width' => $sc->getParameter('width', 'one-third'),
                'image' => $sc->getParameter('image', ''),
                'shortcode' => $sc,
            ]);

            return $output;
        });
    }
}
