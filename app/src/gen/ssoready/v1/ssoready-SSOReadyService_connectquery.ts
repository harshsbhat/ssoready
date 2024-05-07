// @generated by protoc-gen-connect-query v1.3.1 with parameter "target=ts"
// @generated from file ssoready/v1/ssoready.proto (package ssoready.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { APIKey, CreateAPIKeyRequest, CreateEnvironmentRequest, CreateOrganizationRequest, CreateSAMLConnectionRequest, DeleteAPIKeyRequest, Environment, GetAPIKeyRequest, GetEnvironmentRequest, GetOrganizationRequest, GetSAMLConnectionRequest, GetSAMLFlowRequest, GetSAMLRedirectURLRequest, GetSAMLRedirectURLResponse, ListAPIKeysRequest, ListAPIKeysResponse, ListEnvironmentsRequest, ListEnvironmentsResponse, ListOrganizationsRequest, ListOrganizationsResponse, ListSAMLConnectionsRequest, ListSAMLConnectionsResponse, ListSAMLFlowsRequest, ListSAMLFlowsResponse, Organization, RedeemSAMLAccessCodeRequest, RedeemSAMLAccessCodeResponse, SAMLConnection, SAMLFlow, SignInRequest, SignInResponse, UpdateEnvironmentRequest, UpdateOrganizationRequest, UpdateSAMLConnectionRequest, WhoamiRequest, WhoamiResponse } from "./ssoready_pb.js";

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLRedirectURL
 */
export const getSAMLRedirectURL = {
  localName: "getSAMLRedirectURL",
  name: "GetSAMLRedirectURL",
  kind: MethodKind.Unary,
  I: GetSAMLRedirectURLRequest,
  O: GetSAMLRedirectURLResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.RedeemSAMLAccessCode
 */
export const redeemSAMLAccessCode = {
  localName: "redeemSAMLAccessCode",
  name: "RedeemSAMLAccessCode",
  kind: MethodKind.Unary,
  I: RedeemSAMLAccessCodeRequest,
  O: RedeemSAMLAccessCodeResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.SignIn
 */
export const signIn = {
  localName: "signIn",
  name: "SignIn",
  kind: MethodKind.Unary,
  I: SignInRequest,
  O: SignInResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.Whoami
 */
export const whoami = {
  localName: "whoami",
  name: "Whoami",
  kind: MethodKind.Unary,
  I: WhoamiRequest,
  O: WhoamiResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListEnvironments
 */
export const listEnvironments = {
  localName: "listEnvironments",
  name: "ListEnvironments",
  kind: MethodKind.Unary,
  I: ListEnvironmentsRequest,
  O: ListEnvironmentsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetEnvironment
 */
export const getEnvironment = {
  localName: "getEnvironment",
  name: "GetEnvironment",
  kind: MethodKind.Unary,
  I: GetEnvironmentRequest,
  O: Environment,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateEnvironment
 */
export const createEnvironment = {
  localName: "createEnvironment",
  name: "CreateEnvironment",
  kind: MethodKind.Unary,
  I: CreateEnvironmentRequest,
  O: Environment,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateEnvironment
 */
export const updateEnvironment = {
  localName: "updateEnvironment",
  name: "UpdateEnvironment",
  kind: MethodKind.Unary,
  I: UpdateEnvironmentRequest,
  O: Environment,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListAPIKeys
 */
export const listAPIKeys = {
  localName: "listAPIKeys",
  name: "ListAPIKeys",
  kind: MethodKind.Unary,
  I: ListAPIKeysRequest,
  O: ListAPIKeysResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetAPIKey
 */
export const getAPIKey = {
  localName: "getAPIKey",
  name: "GetAPIKey",
  kind: MethodKind.Unary,
  I: GetAPIKeyRequest,
  O: APIKey,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateAPIKey
 */
export const createAPIKey = {
  localName: "createAPIKey",
  name: "CreateAPIKey",
  kind: MethodKind.Unary,
  I: CreateAPIKeyRequest,
  O: APIKey,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.DeleteAPIKey
 */
export const deleteAPIKey = {
  localName: "deleteAPIKey",
  name: "DeleteAPIKey",
  kind: MethodKind.Unary,
  I: DeleteAPIKeyRequest,
  O: Empty,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListOrganizations
 */
export const listOrganizations = {
  localName: "listOrganizations",
  name: "ListOrganizations",
  kind: MethodKind.Unary,
  I: ListOrganizationsRequest,
  O: ListOrganizationsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetOrganization
 */
export const getOrganization = {
  localName: "getOrganization",
  name: "GetOrganization",
  kind: MethodKind.Unary,
  I: GetOrganizationRequest,
  O: Organization,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateOrganization
 */
export const createOrganization = {
  localName: "createOrganization",
  name: "CreateOrganization",
  kind: MethodKind.Unary,
  I: CreateOrganizationRequest,
  O: Organization,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateOrganization
 */
export const updateOrganization = {
  localName: "updateOrganization",
  name: "UpdateOrganization",
  kind: MethodKind.Unary,
  I: UpdateOrganizationRequest,
  O: Organization,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLConnections
 */
export const listSAMLConnections = {
  localName: "listSAMLConnections",
  name: "ListSAMLConnections",
  kind: MethodKind.Unary,
  I: ListSAMLConnectionsRequest,
  O: ListSAMLConnectionsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLConnection
 */
export const getSAMLConnection = {
  localName: "getSAMLConnection",
  name: "GetSAMLConnection",
  kind: MethodKind.Unary,
  I: GetSAMLConnectionRequest,
  O: SAMLConnection,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateSAMLConnection
 */
export const createSAMLConnection = {
  localName: "createSAMLConnection",
  name: "CreateSAMLConnection",
  kind: MethodKind.Unary,
  I: CreateSAMLConnectionRequest,
  O: SAMLConnection,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateSAMLConnection
 */
export const updateSAMLConnection = {
  localName: "updateSAMLConnection",
  name: "UpdateSAMLConnection",
  kind: MethodKind.Unary,
  I: UpdateSAMLConnectionRequest,
  O: SAMLConnection,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLFlows
 */
export const listSAMLFlows = {
  localName: "listSAMLFlows",
  name: "ListSAMLFlows",
  kind: MethodKind.Unary,
  I: ListSAMLFlowsRequest,
  O: ListSAMLFlowsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLFlow
 */
export const getSAMLFlow = {
  localName: "getSAMLFlow",
  name: "GetSAMLFlow",
  kind: MethodKind.Unary,
  I: GetSAMLFlowRequest,
  O: SAMLFlow,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;
