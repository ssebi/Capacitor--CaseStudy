//
//  EchoPlugin.swift
//  App
//
//  Created by Sebastian Vidrea on 13.05.2023.
//

import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
	@objc func echo(_ call: CAPPluginCall) {
		let value = call.getString("value") ?? ""
		call.resolve(["value": value])
	}
}
