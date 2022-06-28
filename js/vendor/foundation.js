import $ from 'jquery';
import { Foundation } from '/home/deployer/sites/node-foundation-customizer/node-foundation-customizer/foundation-sites/js/foundation.core';
Foundation.addToJquery($);
import { MediaQuery } from '/home/deployer/sites/node-foundation-customizer/node-foundation-customizer/foundation-sites/js/foundation.util.mediaQuery';
Foundation.MediaQuery = MediaQuery;
import { Triggers } from '/home/deployer/sites/node-foundation-customizer/node-foundation-customizer/foundation-sites/js/foundation.util.triggers';
Triggers.init($, Foundation);
