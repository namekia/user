<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class FigurShortcode extends Shortcode
{
    function init()
    {
        $this->shortcode->getHandlers()->add('figur', function(ShortcodeInterface $sc) {

            // Add assets
            $this->shortcode->addAssets('css', 'plugin://shortcode-greg/css-compiled/sc-sandboxTwo.css');
            // Add parameters
            $hash = $this->shortcode->getId($sc);
            // $image = $this->grav['page'];
            //Process output
            $output = $this->twig->processTemplate('partials/sc-figur.html.twig', [
                'hash' => $hash,
                'position' => $sc->getParameter('position', 'left'),
                'width' => $sc->getParameter('width', 'one-third'),
                'image' => $sc->getParameter('image', ''),
                'cite' => $sc->getParameter('cite', 'Image by author'),
                'shortcode' => $sc,
            ]);

            return $output;
        });
    }
}

