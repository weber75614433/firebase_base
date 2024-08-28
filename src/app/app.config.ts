import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
<<<<<<< HEAD
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"lab6-de127","appId":"1:706688796050:web:83c08a713d21efcf39ed4b","storageBucket":"lab6-de127.appspot.com","locationId":"asia-east1","apiKey":"AIzaSyDrJOdXeSahA5SVqL4ADcLhXG9u3ysCecI","authDomain":"lab6-de127.firebaseapp.com","messagingSenderId":"706688796050"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
=======
    provideRouter(routes)
>>>>>>> dac9230b896674d119b1ad8df29c84e0c2b7c9e6
  ],
};
