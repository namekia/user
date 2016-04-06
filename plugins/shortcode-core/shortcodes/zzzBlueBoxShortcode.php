<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class zzzBlueBoxShortcode extends Shortcode
{
    function init()
    {
        $this->shortcode->getHandlers()->add('zzzblubox', function(ShortcodeInterface $sc) {

            // Add assets
            $this->shortcode->addAssets('css', 'plugin://shortcode-core/css/sc-sandbox.css');
            return '<div class="blueBox-wrapper clearfix">
                      <div class="blueBox">
                        <div class="bbox">'.$sc->getContent().'</div>
                      </div>
                    </div>';
        });
    }
}
