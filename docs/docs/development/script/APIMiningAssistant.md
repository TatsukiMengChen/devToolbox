# API挖掘助手

> 此文章为有能力的开发者准备，用于挖掘API  
感谢各位大佬的分享！

## miniExtend

[miniExtend开源仓库](https://github.com/0-0000/miniExtend/)

内容较多请于仓库查看内容

miniExtend资源库Q群：414643957

miniExtend （迷你世界脚本扩展）是以面相对象方式封装迷你世界 Lua API 的开源扩展包，同时包括了代码和文档，其设计目的是为了简化脚本代码，提高可读性，从而提高脚本开发者的开发效率。

## 获取函数参数

```lua
function 获取参数名(fun)
  local args = {}
  local hook = debug.gethook()
  local argHook = function(...)
    local info = debug.getinfo(3)
    for k,v in pairs(info) do
      --print(k,v)
    end
    if "pcall" ~= info.name then
      return
    end
    for i = 1, math.huge do
      local name, value = debug.getlocal(2, i)
      --print(i, name, value)
      if "(*temporary)" == name then
        debug.sethook(hook)
        --error("")
        return
      end
      table.insert(args, name)
    end
  end
  debug.sethook(argHook, "c")
  pcall(fun)
  return args
end
--local a = {}
--function a:g(b,c)print("a")end
--a.g()

local function a(b,c)end
for i, v in pairs(获取参数名(a))do print(i,v)end
```

