
# mongodb

## 1. 安装mongodb

## 2. 配置环境变量

## 3. 创建数据库文件路径

    新建文件夹存放数据文件（路径不带中文、不带空格，最好不在c盘中，重装系统会清掉）

## 4. 启动数据库服务，cmd命令窗口中输入：

    ``` cmd
    mongod --dbpath e:\liuxiaoli\mongodb
    ```

## 5. 连接数据库服务，再打开一个cmd窗口

   mongo回车(本地数据库)
   mongo 127.0.0.1:27017(远程数据库)

## 6. 新建命令

    ```cmd
    use student
    db.user.insert({"name":"xiaoming","age":3})
    show collections
    show dbs
    ```

## 7. 查询命令

    ```cmd
    use student
    db.user.find()
    db.user.find({"name":"zhangsan"})
    db.user.find({"age":{$gt:20}})
    db.user.find({"age":{$lt:20}})
    db.user.find({"age":{$gte:20}})
    db.user.find({"age":{$lte:20}})
    db.user.find({"age":{$gt:10,$lt:40}})
    db.user.find().sort({"age":1})
    db.user.find().count()
    db.user.find({"name":/zhang/})
    db.user.find({"name":/^zhang/})
    db.user.find({},{"name":true})
    db.user.find().limit(4).skip(1)
    db.user.findOne()
    db.user.find({$or:[{"name":"zhangsan"},{"name":"lisi"}]})
    db.user.find({"name":/an/,"age":20})
    ```

## 8. 修改命令

    ```cmd
    use student
    db.user.update({"name":"zhangsan"},{$set:{"age":50}})
    db.user.update({"name":"zhangsan"},{"name":"zhangsan","age":50})
    ```

## 9. 删除命令

    删除记录
    ```cmd
    db.user.remove({"name":"lisi"})
    db.user.remove({"name":"lisi"}, {justOne:true})
    ```

    删除数据集合
    ```cmd
    db.article.drop()
    ```

    删除数据库
    ```cmd
    user student1
    db.dropDatabase()
    ```
