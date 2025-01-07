//===----------------------------------------------------------------------===//
//
// This source file is part of the VS Code Swift open source project
//
// Copyright (c) 2021-2023 the VS Code Swift project authors
// Licensed under Apache License v2.0
//
// See LICENSE.txt for license information
// See CONTRIBUTORS.txt for the list of VS Code Swift project authors
//
// SPDX-License-Identifier: Apache-2.0
//
//===----------------------------------------------------------------------===//

// Use source-map-support to get better stack traces
import "source-map-support/register";

/**
 * This is a shell extension entry point that does nothing.
 * It exists to simply be depended on by the real extension at swiftlang/vscode-swift
 */
export async function activate() {}
