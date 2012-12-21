/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2012 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"tv41K1YG82XsABrr9nQZc7BRhp4goD9W"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"atuW4ez9B82BkW3aVXUN9TeqJSzqUiPo"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"LcpRXownawMzr91sWVeeSgJXYFZnXWCR"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"2QzUVPmXG7W86olGeVcw1TLQPxkudCjM"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"AruMYurfRSuVnPdaiLZsvFbP1AsmEVKM"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"9SfrUxlDVDpQpQJsnrDPbZtlRPCsHxxF"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

@end