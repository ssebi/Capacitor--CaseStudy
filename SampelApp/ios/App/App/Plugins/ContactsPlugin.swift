//
//  ContactsPlugin.swift
//  App
//
//  Created by Sebastian Vidrea on 13.05.2023.
//

import Capacitor

@objc(ContactsPlugin)
public class ContactsPlugin: CAPPlugin {
	@objc func getContacts(_ call: CAPPluginCall) {
		call.resolve(
			[
				"results": [
					"Contact1",
					"Contact2"
				]
			]
		)
	}
}
