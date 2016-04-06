<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class BlueBoxShortcode extends Shortcode
{
    function init()
    {
        $this->shortcode->getHandlers()->add('blubox', function(ShortcodeInterface $sc) {

            // Add assets
            $this->shortcode->addAssets('css', 'plugin://shortcode-core/css/sc-sandbox.css');
            return '<div class="blue-box-wrapper clearfix">
                      <div class="blue-box">
                        <div class="bbox">'.$sc->getContent().'</div>
                      </div>
                    </div>';
        });
    }
}
