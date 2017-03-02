# REST(一种软件架构的风格)

> 出处： Roy Thomas Fielding 博士2000年在他的博士论文中提出的一种万维网软件架构风格

> 论文REST章节[ \[Fielding Dissertation: CHAPTER 5: Representational State Transfer\]][1]

> 目的：便于不通软件/程序在网络中互相传递信息

## REST
* 全称：REST -- Resource Representational State Transfer （资源在网络中以某种表现形式进行状态转移）
>  **说人话：URL定位资源，用HTTP动词（GET,POST,DELETE,PUT, PATCH）描述操作。**

    * Resource： 资源 比如products, orders....
    * Representational: 某种表现形式，比如用JSON，XML
    * State Transfer： 状态变化 同一资源通过http动词实现不同状态

## RESTful API：

* 什么是RESTful API?

    以资源为中心，一种面向资源的设计风格，符合REST设计风格的Web API
    
    * 每一个URI代表一个资源
    
    > /shops              // 所有店铺
     
    > /shops/ID           // 某个店铺 

    > /shops/ID/products  // 某个店铺下的所有产品
    
    > /shops/ID/products/ID //某个店铺下的某个产品
        
    * 客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。
    
    > GET /shops        //获取所有店铺
    
    > POST /shops       // 新增一个店铺
    
    > GET /shops/ID     // 获取某个店铺
    
    > PUT /shops/ID     // 更新某个店铺 （全部信息）
    
    > PATCH /shops/ID   // 更新某个店铺（部分信息）
    
    > DELETE /shops/ID  // 删除某个店铺
    
    > GET /shops/ID/products // 获取某个店铺下所有的产品
    
    > DELETE /shops/ID/products/ID 删除某个店铺下某个产品
    
    * 客户端和服务器之间，传递这种资源的某种表现层  
    
    > 使用JSON、XML来对资源的表现

* 为什么要用RESTful
    1. 资源和操作分离、资源描述与视图的松耦合
    2. 混合开发模式 -> SPA模式、单一设备 -> 多设备
    3. 可提供开发API,便于第三方系统集成
    4. 提高应用的扩展性（前端，服务端没有接触）

*   有哪些大公司使用restful
    1. [github][2]
    2. [饿了么][3]
    2. [阿里云][4]
    3. [腾讯云][5]
    4. [豆瓣][6]
    
* 设计API规范
   +  命名
   URL 不包含动词 因为资源是一种实体，所以应该是名称。应该使用`http`动词。
    
    > 常用动词
    >  * GET            从服务器取出资源（一项或多项）
    >  * POST           在服务器新建一个资源
    >  * PUT            在服务器更新资源（客户端提供改变后的完整资源）
    >  * PATCH          在服务器更新资源（客户端提供改变的属性）
    >  * DELETE         从服务器删除资源。

   +  版本号
   +  状态码
   服务端返回对应的状态码和提示信息 
    
    > 常见的有
    > 200 OK                    服务器成功返回用户请求的数据
    > 201 CREATED               新建或修改数据成功
    > 204 NO CONTENT            删除资源成功
    > 400 INVALID REQUES        请求出错
    > 401 Unauthorized          没有权限
    > 403 Forbidden             获得授权 但访问被禁止
    > 404 NOT FOUND             资源未找到
    > 406 Not Acceptable        请求的资源的内容特性无法满足请求头中的条件，无法生成响应实体。
    > 410 Gone                  资源被永久删除
    > 422 Unprocesable entity   创建资源时发生验证错误
    > 500 INTERNAL SERVER ERROR 服务器发生错误

    + 错误信息
    github处理方式: [https://developer.github.com/v3/#schema][7]
    
    
    1. github:
    ```JS
        {
            "message": "Validation Failed",
            "errors": [
                {
                "resource": "Issue",
                "field": "title",
                "code": "missing_field"
                }
            ]
        }
    ```
    
    1. Google:
    ```JS

        {
          "error": {
            "errors": [
              {
                "domain": "global",
                "reason": "insufficientFilePermissions",
                "message": "The user does not have sufficient permissions for file {fileId}."
              }
            ],
            "code": 403,  // 业务码 区别于网络响应状态码
            "message": "The user does not have sufficient permissions for file {fileId}."
          }
        }
    ```
    
    1. Facebook:
    ```JS
        {
          "error": {
            "message": "Message describing the error", 
            "type": "OAuthException",
            "code": 190,
            "error_subcode": 460,
            "error_user_title": "A title",
            "error_user_msg": "A message",
            "fbtrace_id": "EJplcsCHuLu"
          }
        }
    ```
    
    1. Twitter:
    ```JS
        {
          "errors": [
            {
              "message": "Sorry, that page does not exist",
              "code": 34
            }
          ]
        }
    ```
    当出现错误的时候 应该还需要返回指引用户执行下一步的操作。比如下面是github API中在未找到资源时候 提供一个如何创建资源的链接。
    
    ```js
    {
      "message": "Not Found",
      "documentation_url": "https://developer.github.com/v3/issues/#create-an-issue"
    }
    ```
    
    
    + 返回结果
    不同操作返回不同结果
    
    ```js
        GET /collection：返回资源对象的列表（数组）
        GET /collection/resource：返回单个资源对象
        POST /collection：返回新生成的资源对象
        PUT /collection/resource：返回完整的资源对象
        PATCH /collection/resource：返回完整的资源对象
        DELETE /collection/resource：返回一个空文档
    ```

## 前端的实现

前端现在流行的框架或库已对restful完美支持。

1. angularjs: ng-resource.js,restangular

2. vue : vue-resource, axios

3. react: fetch


  [1]: http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
  [2]: https://developer.github.com/v3/issues/
  [3]: https://www.ele.me
  [4]: https://help.aliyun.com/document_detail/27490.html
  [5]: https://www.qcloud.com/document/product/275/3808
  [6]: https://developers.douban.com/wiki/?title=movie_v2
  [7]: https://developer.github.com/v3/#schema
