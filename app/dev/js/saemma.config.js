requirejs.config({
    baseUrl: '../../dev',
    paths: {
        app: 'js',
        jquery: 'lib/jquery/dist/jquery',
        bootstrapjs: 'lib/bootstrap/dist/js/bootstrap',
        bootstrapcss: 'lib/bootstrap/dist/css/bootstrap',
        bootflatCheckjs: 'lib/bootflatv2/bootflat/js/icheck.min',
        bootflatSelecterjs:'lib/bootflatv2/bootflat/js/jquery.fs.selecter.min',
        bootflatStepperjs:'lib/bootflatv2/bootflat/js/jquery.fs.stepper.min',
        bootflatcss: 'lib/bootflatv2/bootflat/css/bootflat'
    },
    shim: {
        'bootstrapjs': ['jquery'],
        'bootflatCheckjs': ['bootstrapjs'],
        'bootflatSelecterjs': ['bootstrapjs'],
        'bootflatStepperjs': ['bootstrapjs']
    },
	map: {
	  '*': {
	    'cssloader': 'lib/require-css/css'
	  }
	}
});

requirejs(['app/saemma']);