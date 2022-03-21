import { CapacitorConfig } from '@capacitor/cli';
import { environment } from './src/environments/environment';

const config: CapacitorConfig = {
    appId: 'hu.noelhorvath.miband3companion',
    appName: 'Mi Band 3 Companion',
    webDir: 'www',
    bundledWebRuntime: false,
    loggingBehavior: environment.production ? 'production' : 'debug',
    server: {
        hostname: 'localhost'
    },
    plugins: {
        /*
        // TODO: configure splash screen
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: true,
            backgroundColor: '#ff9500',
            //androidSplashResourceName: 'splash',
            androidScaleType: 'FIT_CENTER',
            showSpinner: true,
            androidSpinnerStyle: 'small',
            iosSpinnerStyle: 'small',
            spinnerColor: '#ffffff',
            splashFullScreen: true,
            splashImmersive: true,
            layoutName: 'launch_screen',
            useDialog: false,
        },
        */
    },
};

export default config;
