//
//  ContactsPlugin.swift
//  App
//
//  Created by Sebastian Vidrea on 13.05.2023.
//

import Capacitor
import Contacts

@objc(ContactsPlugin)
public class ContactsPlugin: CAPPlugin {
	@objc func getContacts(_ call: CAPPluginCall) {
		do {
			call.resolve(
				[
					"results": try getContacts()
				]
			)
		} catch {
			call.reject(error.localizedDescription)
		}
	}

	private func getContacts() throws -> [Any] {
		let store = CNContactStore()
		var contacts = [Any]()

		let request = CNContactFetchRequest(
			keysToFetch:
				[
					CNContactGivenNameKey,
					CNContactFamilyNameKey
				] as [CNKeyDescriptor]
		)

		try store.enumerateContacts(with: request) { contact, _ in
			contacts.append(
				[
					"firstName": contact.givenName,
					"lastName": contact.familyName
				]
			)
		}

		return contacts
	}
}
