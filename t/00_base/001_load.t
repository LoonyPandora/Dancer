use strict;
use warnings;

use Test::More tests => 1, import => ['!pass'];
use Dancera;

ok( setting('appdir'), 'Complete import' );
diag( "Testing Dancer $Dancer::VERSION, Perl $], $^X" );
