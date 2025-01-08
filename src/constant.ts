/**
 * 初始化分页数据
 */
export const initialPagination = {
    page: 1,
    pageSize: 10,
  };
  
  /**
   * 分页设置
   */
  export const pageSizeOptions = ['10', '20', '50', '100', '500', '1000', '5000'];
  
  /**
   * 请求节流
   */
  export const THROTTLE_INTERVAL = 500;
  
  /**
   * js 异常名称
   * ReferenceError（引用错误）
   * SyntaxError (解析语法错误/如序列化)
   * TypeError（类型错误）
   * RangeError（值不在其所允许的范围或者集合中）
   */
  export const JS_ERROR_NAMES = ['ReferenceError', 'SyntaxError', 'TypeError', 'RangeError'];
  
  /** 用户权限角色枚举 */
  export const USER_ROLE = {
    Normal: 0,
    Manager: 1,
    Super_Manager: 2,
    Open: 3,
  };
  
  /** 开放角色菜单 */
  export const OPEN_ROLE_ROUTES = [
    {
      //...
    },
  ];
  