/**
 * 文件操作工具类(通用)
 * @author yfmei
 * @date 2020/5/9
 */
const fs = require("fs")
let path = require("path")

// 排除的文件
let excludes = [".DS_Store"]

const file = {
  // Windows?
  win32: process.platform === "win32",
  // Normalize \\ paths to / paths.
  unixifyPath(filepath) {
    let that = this;
    if (that.win32) {
      return filepath.replace(/\\/g, '/');
    } else {
      return filepath;
    }
  },
  /**
   * 写入文件
   * @param path 如是根目录则需要确保文件已存在
   * @param data
   */
  write(path, data) {
    fs.writeFile(path, data, {
      encoding: "utf-8",
      flag: "w"
    }, (err) => {
      console.log("文件写入结果: %o", err)
    })
  },

  /**
   * 写入中文字符
   * @param path
   * @param data
   */
  writeUint8Array(path, data) {
    this.write(path, new Uint8Array(Buffer.from(data)))
  },

  /**
   * 写入json文件
   * @param path 如是根目录则需要确保文件已存在
   * @param data
   */
  writeJson(path, data) {
    this.write(path, JSON.stringify(data))
  },
  /**
   * 获取指定目录下的文件
   * @param rootDir 根目录
   * @param subDir 上级目录
   * @param isRecurse 是否遍历子目录
   * @param callback
   */
  recurse({ rootDir, subDir, isRecurse= true, callback }) {
    let that = this;
    // 绝对路径
    let absPath = subDir ? path.join(rootDir, subDir) : rootDir;
    // 遍历绝对路径
    fs.readdirSync(absPath).forEach(file => {
        // 文件路径
      let filepath = path.join(absPath, file);
      // 判断文件还是目录
      if (fs.statSync(filepath).isFile()) {
          // 文件直接返回
        callback(that.unixifyPath(filepath), rootDir, subDir, file)
      } else {
          // 目录判断需不需要递归
        if (isRecurse) {
          that.recurse({
            rootDir,
            callback,
            subDir: that.unixifyPath(path.join(subDir || '', file || '')),
            isRecurse
          });
        }
      }
    })
  },
  /**
   * 获取指定目录下的子目录
   * @param rootDir 根目录
   * @param subDir 上级目录
   * @param isRecurse 是否遍历子目录
   * @param callback
   */
  recurseDir({ rootDir, subDir, isRecurse= true, callback }) {
    let that = this;
    let absPath = subDir ? path.join(rootDir, subDir) : rootDir;
    fs.readdirSync(absPath).forEach(file => {
      let filepath = path.join(absPath, file);
      if (fs.statSync(filepath).isDirectory()) {
        callback(that.unixifyPath(filepath), rootDir, subDir, file)
        if (isRecurse) {
          that.recurseDir({
            rootDir,
            callback,
            subDir: that.unixifyPath(path.join(subDir || '', file || '')),
            isRecurse
          });
        }
      }
    })
  },
  /**
   * todo 待改造
   * 获取目录树：
   * 1. 指定目录
   * 2.
   * @param rootDir 指定遍历的目录(绝对路径): c://xxx/xxx/xxx/sdk
   * @param subDir 上一级目录(相对目录): /sdk
   * @returns {[]}
   */
  getDirTree(rootDir, subDir= "") {
    console.log(`当前目录: ${rootDir}, subDir: ${subDir}`)
    let absPath = subDir ? path.join(rootDir, subDir) : rootDir;
    let dirTree = []
    fs.readdirSync(absPath).forEach(file => {
      if (excludes.indexOf(file) < 0) {
          let filepath = path.join(absPath, file);
        if (fs.statSync(filepath).isFile()) {
          // 文件
          dirTree.push(path.join(rootDir, subDir, file));
        } else {
          // 目录
          let directory = {}
          directory.dirname = file
          // directory.children = getDirTree(path.join(rootDir, file), path.join(subDir, file))
          // 获取子菜单
          let dirTrees = this.getDirTree(rootDir, path.join(subDir||"", file))
          console.log("-------------文件排序前, %o", dirTrees)
          // 文件排序
          dirTrees.sort()
          console.log("-------------文件排序后 , %o", dirTrees)

          directory.children = dirTrees
          // 嵌套结构
          directory.isolated = true
          directory.initialIsolatedOpen = true
          directory.sidebarDepth = 0

          dirTree.push(directory)
        }
      }
    })
    // 目录排序
    dirTree.sort()
    return dirTree
  },
  // ******************************* 对外封装简化方法 *******************************
    /**
     * 获取指定目录下的所有文件名
     * @param path
     * @returns {[]}
     */
  getFileNames(path) {
    let fileNames = []
    this.recurse({
      rootDir: path,
      callback: (filePath, rootDir, subDir, fileName) => {
        fileNames.push(fileName)
      }
    })
    return fileNames;
  },
    /**
     * 获取指定目录下的所有文件路径
     * @param path
     * @returns {[]}
     */
  getFilePaths(path) {
    let filePaths = []
    this.recurse({
      rootDir: path,
      callback: (filePath, rootDir, subDir, fileName) => {
        filePaths.push(filePath)
      }
    })
    return filePaths;
  }
}

module.exports = file
