class LoginParam {
  /** password */
  password = '';

  /** 用户名/邮箱 */
  username = '';
}

class PasswordDTO {
  /** confirmPassword */
  confirmPassword = '';

  /** newPassword */
  newPassword = '';

  /** oldPassword */
  oldPassword = '';
}

class PermissionDTO {
  /** 路由组件 */
  component = '';

  /** 是否存在子级权限 */
  hasChildren = false;

  /** 图标 */
  icon = '';

  /** id */
  id = undefined;

  /** 权限关键词(权限认证使用此字段) */
  keyName = '';

  /** 父级权限id */
  parentId = undefined;

  /** 路由路径 */
  path = '';

  /** 权限名称 */
  permissionName = '';

  /** 参数 */
  perms = '';
}

class ResponseBodyEmitter {
  /** timeout */
  timeout = undefined;
}

class Result {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** message */
  message = '';
}

class RoleDTO {
  /** id */
  id = undefined;

  /** 角色关键词(权限认证字段) */
  roleKey = '';

  /** 角色名称 */
  roleName = '';
}

class SecurityConfiguration {
  /** additionalQueryStringParams */
  additionalQueryStringParams = undefined;

  /** apiKey */
  apiKey = '';

  /** apiKeyName */
  apiKeyName = '';

  /** apiKeyVehicle */
  apiKeyVehicle = '';

  /** appName */
  appName = '';

  /** clientId */
  clientId = '';

  /** clientSecret */
  clientSecret = '';

  /** enableCsrfSupport */
  enableCsrfSupport = false;

  /** realm */
  realm = '';

  /** scopeSeparator */
  scopeSeparator = '';

  /** useBasicAuthenticationWithAccessCodeGrant */
  useBasicAuthenticationWithAccessCodeGrant = false;
}

class SwaggerResource {
  /** location */
  location = '';

  /** name */
  name = '';

  /** swaggerVersion */
  swaggerVersion = '';

  /** url */
  url = '';
}

class UiConfiguration {
  /** deepLinking */
  deepLinking = false;

  /** defaultModelExpandDepth */
  defaultModelExpandDepth = undefined;

  /** defaultModelRendering */
  defaultModelRendering = 'example';

  /** defaultModelsExpandDepth */
  defaultModelsExpandDepth = undefined;

  /** displayOperationId */
  displayOperationId = false;

  /** displayRequestDuration */
  displayRequestDuration = false;

  /** docExpansion */
  docExpansion = 'none';

  /** filter */
  filter = undefined;

  /** maxDisplayedTags */
  maxDisplayedTags = undefined;

  /** operationsSorter */
  operationsSorter = 'alpha';

  /** showCommonExtensions */
  showCommonExtensions = false;

  /** showExtensions */
  showExtensions = false;

  /** supportedSubmitMethods */
  supportedSubmitMethods = [];

  /** swaggerBaseUiUrl */
  swaggerBaseUiUrl = '';

  /** tagsSorter */
  tagsSorter = 'alpha';

  /** validatorUrl */
  validatorUrl = '';
}

class User {
  /** avatar */
  avatar = '';

  /** 创建者 */
  createBy = undefined;

  /** email */
  email = '';

  /** 创建时间 */
  gmtCreate = '';

  /** 更新时间 */
  gmtModified = '';

  /** id */
  id = undefined;

  /** 逻辑删除(0：未删除 1：已删除) */
  isDeleted = undefined;

  /** nickname */
  nickname = '';

  /** password */
  password = '';

  /** phone */
  phone = '';

  /** 角色id */
  roleIds = [];

  /** 角色名称 */
  roleNames = [];

  /** state */
  state = undefined;

  /** type */
  type = undefined;

  /** 更新者 */
  updateBy = undefined;

  /** username */
  username = '';
}

class UserDTO {
  /** 头像 */
  avatar = '';

  /** 邮箱 */
  email = '';

  /** id */
  id = undefined;

  /** 昵称 */
  nickname = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 用户状态(0：禁用 1：启用，默认为1) */
  state = undefined;

  /** 用户类型 */
  type = undefined;

  /** 用户名 */
  username = '';
}

export const base = {
  LoginParam,
  PasswordDTO,
  PermissionDTO,
  ResponseBodyEmitter,
  Result,
  RoleDTO,
  SecurityConfiguration,
  SwaggerResource,
  UiConfiguration,
  User,
  UserDTO,
};
