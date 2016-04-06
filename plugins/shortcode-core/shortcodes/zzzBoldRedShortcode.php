<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class zzzBoldRedShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('zzzbld', function(ShortcodeInterface $sc) {
            return '<span style="font-weight: bold; color: red;">'.$sc->getContent().'</span>';
        });
    }
}
