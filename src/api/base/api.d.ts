type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

interface AjaxResponse<T> {
  code: number;
  data: T;
  message: string;
  tips: string;
  traceId: string;
}

declare namespace defs {
  export namespace base {
    export class LoginParam {
      /** password */
      password?: string;

      /** 用户名/邮箱 */
      username?: string;
    }

    export class PasswordDTO {
      /** confirmPassword */
      confirmPassword?: string;

      /** newPassword */
      newPassword?: string;

      /** oldPassword */
      oldPassword?: string;
    }

    export class PermissionDTO {
      /** 路由组件 */
      component?: string;

      /** 是否存在子级权限 */
      hasChildren?: boolean;

      /** 图标 */
      icon?: string;

      /** id */
      id?: number;

      /** 权限关键词(权限认证使用此字段) */
      keyName?: string;

      /** 父级权限id */
      parentId?: number;

      /** 路由路径 */
      path?: string;

      /** 权限名称 */
      permissionName?: string;

      /** 参数 */
      perms?: string;
    }

    export class ResponseBodyEmitter {
      /** timeout */
      timeout?: number;
    }

    export class Result {
      /** code */
      code?: number;

      /** data */
      data?: object;

      /** message */
      message?: string;
    }

    export class RoleDTO {
      /** id */
      id?: number;

      /** 角色关键词(权限认证字段) */
      roleKey?: string;

      /** 角色名称 */
      roleName?: string;
    }

    export class SecurityConfiguration {
      /** additionalQueryStringParams */
      additionalQueryStringParams?: ObjectMap<any, object>;

      /** apiKey */
      apiKey?: string;

      /** apiKeyName */
      apiKeyName?: string;

      /** apiKeyVehicle */
      apiKeyVehicle?: string;

      /** appName */
      appName?: string;

      /** clientId */
      clientId?: string;

      /** clientSecret */
      clientSecret?: string;

      /** enableCsrfSupport */
      enableCsrfSupport?: boolean;

      /** realm */
      realm?: string;

      /** scopeSeparator */
      scopeSeparator?: string;

      /** useBasicAuthenticationWithAccessCodeGrant */
      useBasicAuthenticationWithAccessCodeGrant?: boolean;
    }

    export class SwaggerResource {
      /** location */
      location?: string;

      /** name */
      name?: string;

      /** swaggerVersion */
      swaggerVersion?: string;

      /** url */
      url?: string;
    }

    export class UiConfiguration {
      /** deepLinking */
      deepLinking?: boolean;

      /** defaultModelExpandDepth */
      defaultModelExpandDepth?: number;

      /** defaultModelRendering */
      defaultModelRendering?: 'example' | 'model';

      /** defaultModelsExpandDepth */
      defaultModelsExpandDepth?: number;

      /** displayOperationId */
      displayOperationId?: boolean;

      /** displayRequestDuration */
      displayRequestDuration?: boolean;

      /** docExpansion */
      docExpansion?: 'none' | 'list' | 'full';

      /** filter */
      filter?: object;

      /** maxDisplayedTags */
      maxDisplayedTags?: number;

      /** operationsSorter */
      operationsSorter?: 'alpha' | 'method';

      /** showCommonExtensions */
      showCommonExtensions?: boolean;

      /** showExtensions */
      showExtensions?: boolean;

      /** supportedSubmitMethods */
      supportedSubmitMethods?: Array<string>;

      /** swaggerBaseUiUrl */
      swaggerBaseUiUrl?: string;

      /** tagsSorter */
      tagsSorter?: 'alpha';

      /** validatorUrl */
      validatorUrl?: string;
    }

    export class User {
      /** avatar */
      avatar?: string;

      /** 创建者 */
      createBy?: number;

      /** email */
      email?: string;

      /** 创建时间 */
      gmtCreate?: string;

      /** 更新时间 */
      gmtModified?: string;

      /** id */
      id?: number;

      /** 逻辑删除(0：未删除 1：已删除) */
      isDeleted?: number;

      /** nickname */
      nickname?: string;

      /** password */
      password?: string;

      /** phone */
      phone?: string;

      /** 角色id */
      roleIds?: Array<number>;

      /** 角色名称 */
      roleNames?: Array<string>;

      /** state */
      state?: number;

      /** type */
      type?: number;

      /** 更新者 */
      updateBy?: number;

      /** username */
      username?: string;
    }

    export class UserDTO {
      /** 头像 */
      avatar?: string;

      /** 邮箱 */
      email?: string;

      /** id */
      id?: number;

      /** 昵称 */
      nickname?: string;

      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 用户状态(0：禁用 1：启用，默认为1) */
      state?: number;

      /** 用户类型 */
      type?: number;

      /** 用户名 */
      username?: string;
    }
  }
}

declare namespace API {
  export namespace base {
    /**
     * AI模块
     */
    export namespace aI模块 {
      /**
        * AI生成教案
message 暂定为生成教案的标题
        * /ai/generate
        */
      export namespace generate {
        export class Params {
          /** message */
          message: string;
        }

        export type Response = defs.base.ResponseBodyEmitter['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * api-resource-controller
     */
    export namespace apiResource {
      /**
       * undefined
       * /swagger-resources
       */
      export namespace swaggerResources {
        export class Params {}

        export type Response = Array<defs.base.SwaggerResource>['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * undefined
       * /swagger-resources/configuration/security
       */
      export namespace securityConfiguration {
        export class Params {}

        export type Response = defs.base.SecurityConfiguration['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * undefined
       * /swagger-resources/configuration/ui
       */
      export namespace uiConfiguration {
        export class Params {}

        export type Response = defs.base.UiConfiguration['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }
    }

    /**
     * swagger-2-controller-web-mvc
     */
    export namespace swagger2ControllerWebMvc {
      /**
       * undefined
       * /v2/api-docs
       */
      export namespace getDocumentation {
        export class Params {
          /** group */
          group?: string;
          /** servletRequest */
          servletRequest: object;
        }

        export type Response = string['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 文件管理模块
     */
    export namespace 文件管理模块 {
      /**
        * 上传文件
上传图片的通用接口，只能上传图片，且图片大小不超过3M(如果嫌小可以在配置文件中改大，不过消耗的流量也会因此增大)，返回结果即为图片地址
        * /file/upload
        */
      export namespace upload {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(bodyParams: object): Promise<Response>;
      }
    }

    /**
     * 权限管理
     */
    export namespace 权限管理 {
      /**
        * 查询权限
查询所有权限(树形权限,用于权限配置时选择<br/>权限：admin.permission.get
        * /user/permission/
        */
      export namespace selectPermission {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
        * 修改权限
有些字段不需要的可以直接不传<br/>权限：admin.permission.update
        * /user/permission/
        */
      export namespace updatePermission {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(
          bodyParams: defs.base.PermissionDTO,
        ): Promise<Response>;
      }

      /**
        * 增加权限
权限：admin.permission.add
        * /user/permission/
        */
      export namespace addPermission {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(
          bodyParams: defs.base.PermissionDTO,
        ): Promise<Response>;
      }

      /**
        * 级联权限懒加载
表格数据渲染<br/>权限：admin.permission
        * /user/permission/lazyLoad/{parentId}
        */
      export namespace lazyLoad {
        export class Params {
          /** parentId */
          parentId: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
        * 根据角色查询权限
只会查询到id,用于数据回显
        * /user/permission/role/{roleId}
        */
      export namespace selectPermissionByRole {
        export class Params {
          /** roleId */
          roleId: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
        * 根据id查询
用于数据回显
        * /user/permission/{id}
        */
      export namespace selectPermissionById {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
        * 删除权限
根据id进行权限表的删除<br/>权限：admin.permission.delete
        * /user/permission/{id}
        */
      export namespace delPermission {
        export class Params {
          /** 权限表里权限字段对应的id */
          id: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 用户模块
     */
    export namespace 用户模块 {
      /**
       * 更新
       * /user
       */
      export namespace update {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(bodyParams: defs.base.UserDTO): Promise<Response>;
      }

      /**
        * 新增
id不需要填写，直接删除id那行
        * /user
        */
      export namespace save {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(bodyParams: defs.base.UserDTO): Promise<Response>;
      }

      /**
       * 查询列表
       * /user/
       */
      export namespace list {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 绑定角色
       * /user/bind/{userId}/{roleId}
       */
      export namespace bind_1 {
        export class Params {
          /** userId */
          userId: number;
          /** roleId */
          roleId: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取用户信息
       * /user/info
       */
      export namespace getUserInfo {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 登录
       * /user/login
       */
      export namespace login {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(
          bodyParams: defs.base.LoginParam,
        ): Promise<Response>;
      }

      /**
       * 退出登录
       * /user/logout
       */
      export namespace logout {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 分页查询
       * /user/page
       */
      export namespace page {
        export class Params {
          /** pageNum */
          pageNum?: number;
          /** pageSize */
          pageSize?: number;
          /** key */
          key?: string;
          /** type */
          type?: number;
          /** withRole */
          withRole?: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 注册账号
       * /user/regist
       */
      export namespace regist {
        export class Params {
          /** code */
          code: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(
          bodyParams: defs.base.UserDTO,
          params: Params,
        ): Promise<Response>;
      }

      /**
       * 重置密码(后台)
       * /user/reset/password
       */
      export namespace resetPassword {
        export class Params {
          /** uid */
          uid: number;
          /** password */
          password: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 发送验证码
       * /user/sendCode
       */
      export namespace sendCode {
        export class Params {
          /** email */
          email: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 解除角色绑定
       * /user/unbind/{userId}/{roleId}
       */
      export namespace unbind {
        export class Params {
          /** userId */
          userId: number;
          /** roleId */
          roleId: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 修改用户
       * /user/update
       */
      export namespace update_1 {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(bodyParams: defs.base.User): Promise<Response>;
      }

      /**
       * 修改密码
       * /user/update/password
       */
      export namespace updatePassword {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(
          bodyParams: defs.base.PasswordDTO,
        ): Promise<Response>;
      }

      /**
       * 根据id获取用户信息（后台）
       * /user/{id}
       */
      export namespace get {
        export class Params {
          /** 主键 */
          id: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 根据id删除
       * /user/{id}
       */
      export namespace remove {
        export class Params {
          /** 主键 */
          id: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 角色管理
     */
    export namespace 角色管理 {
      /**
        * 查询角色
查询所有
权限：admin.role.get
        * /user/role/
        */
      export namespace selectRole {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
        * 修改角色
permissions字段用于传输需要重新绑定的权限id(完全覆盖,不会在原有基础上增加或者删除)
权限：admin.role.update
        * /user/role/
        */
      export namespace updateRole {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(bodyParams: defs.base.RoleDTO): Promise<Response>;
      }

      /**
        * 增加角色
permissions字段用于传输需要绑定的权限id
权限：admin.role.add
        * /user/role/
        */
      export namespace addRole {
        export class Params {}

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(bodyParams: defs.base.RoleDTO): Promise<Response>;
      }

      /**
        * 绑定权限
为角色绑定权限
        * /user/role/bind/{roleId}/{permissionId}
        */
      export namespace bind {
        export class Params {
          /** roleId */
          roleId: number;
          /** permissionId */
          permissionId: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
        * 条件分页查询角色
条件分页查询
        * /user/role/page
        */
      export namespace selectRolePage {
        export class Params {
          /** pageNum */
          pageNum?: number;
          /** pageSize */
          pageSize?: number;
          /** key */
          key?: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 解除绑定
       * /user/role/unbind/{roleId}/{permissionId}
       */
      export namespace unbind_1 {
        export class Params {
          /** roleId */
          roleId: number;
          /** permissionId */
          permissionId: number;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
        * 删除角色
权限：admin.role.delete
        * /user/role/{id}
        */
      export namespace delRole {
        export class Params {
          /** 角色表里权限字段对应的id */
          id: string;
        }

        export type Response = defs.base.Result['data'];

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }
  }
}
