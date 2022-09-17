/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList { }
   }
 }
 
 export type RootStackParamList = {
   Root: NavigatorScreenParams<RootTabParamList> | {};
   Modal: undefined;
   NotFound: undefined;
   dashboard: {  };
   Course: undefined;
   Modules: undefined;
   ModuleInfo: {};
   Quiz: undefined;
   PdfScreen: undefined;
   ModuleSlides: {};
   Onboarding: { email: string };
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
   TabOne: undefined;
   TabTwo: undefined;
   dashboard: {  };
   Profile: undefined;
   Modules: undefined;
   ModuleInfo: undefined;
   Quiz: undefined;
   ModuleSlides: undefined;
   Onboarding: { email: string };
 };
 
 export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
   BottomTabScreenProps<RootTabParamList, Screen>,
   NativeStackScreenProps<RootStackParamList>
 >;
 