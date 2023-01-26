# 旧版本图片解密

!> 这是**Python**文档，并非**Lua**文档！

> 此脚本用于解密迷你世界远古版本的加密图片
> 使用之前请确保已经安装**Python3**并配置好环境变量
> **Python**脚本来自网络，并非本人原创

## 效果演示

[解密前：（由于无法正常显示图片，所以提供下载链接）](https://tatsukimengchen.github.io/devToolbox/docs/development/script/images/rail_detector.zip)

解密后：

![解密后](/images/rail_detector.png)

## 用到的库

```python
import os
import struct
import six
import shutil
```

其中**six**库需要手动安装，请在**命令行**中输入以下代码：

```
pip install six
```

## 使用方法

1. 新建文件夹，将**Python**脚本和需要解密的图片一并放在文件夹里，可同时解密多张图片
2. 运行**Python**脚本
3. 脚本运行完毕后会在当前目录下生成一个名为**_decrypted**的文件夹，解密的图片就在里面

## **Python**脚本

```python
import os
import struct
import six
import shutil

D8_KEY = b"\xd6\x02\x08\x00\xf4\xfe\xff\x3f\x01\x00\x00\x00\xd0\xca\x01\x00"
OUT_PATH = os.path.join(os.curdir, "_decrypted")

def decrypt_folder(path):
    for file_name in os.listdir(path):
        if not file_name[0] == "_":
            if os.path.isdir(file_name):
                decrypt_folder(os.path.join(path, file_name))
            else:
                try:
                    decrypt_file(os.path.join(path, file_name))
                except:
                    decrypt_folder(os.path.join(path, file_name))

def decrypt_file(path):
    with open(path, "rb") as f:
        sign = f.read(4)
        if sign == b"\xff\xd9\xff\xd8":
            file_size = os.path.getsize(path)
            enc_size = struct.unpack(">i", f.read(4))[0]
            enc_data = f.read(enc_size)
            no_enc_data = f.read(file_size - enc_size - 8)

            out_path = os.path.join(OUT_PATH, path[2:])

            if not os.path.exists(os.path.dirname(out_path)):
                os.makedirs(os.path.dirname(out_path))

            with open(out_path, "wb") as of:
                for i in range(0, enc_size):
                    dec_byte = enc_data[i] ^ D8_KEY[i & 0xf]
                    of.write(six.int2byte(dec_byte))
                of.write(no_enc_data)

            print("Decrypted encrypted file:" + path)

        elif sign == b"\xff\xd9\xff\xd7":
            print("Ignored encrypted file:" + path)

        else:
            f.close()

            out_path = os.path.join(OUT_PATH, path[2:])

            if not os.path.exists(os.path.dirname(out_path)):
                os.makedirs(os.path.dirname(out_path))

            shutil.copyfile(path, out_path)

            print("Copied non-encrypted file:" + path)

decrypt_folder(os.curdir)
```