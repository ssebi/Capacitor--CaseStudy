//
//  ContactsPlugin.m
//  App
//
//  Created by Sebastian Vidrea on 13.05.2023.
//

#import <Capacitor/Capacitor.h>

CAP_PLUGIN(ContactsPlugin, "Contacts",
		   CAP_PLUGIN_METHOD(getContacts, CAPPluginReturnPromise);
)
