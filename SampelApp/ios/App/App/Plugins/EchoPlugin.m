//
//  EchoPlugin.m
//  App
//
//  Created by Sebastian Vidrea on 13.05.2023.
//

#import <Capacitor/Capacitor.h>

CAP_PLUGIN(EchoPlugin, "Echo",
	CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
