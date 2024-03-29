---
description: 基本数据类型、复杂数据类型
---

# 第二章 数据类型 元组 数组

## 变量和常量

* 变量 `let`，可以由 `mut` 关键字表示数据可变，可注明类型。
* 常量 `const` 不允许使用 `mut` 关键字 且必须注明类型。

## 数据类型

### 标量 （scalar）

该类型代表一个单独的值。Rust有四种基本标量类型：

* 整型
* 浮点型
* 布尔
* 字符类型

#### 整型

| 长度 | 有符号 | 无符号 |
| :--- | :--- | :--- |
| 8-bit | i8 | u8 |
| 16-bit | i16 | u16 |
| 32-bit | i32 | u32 |
| 64-bit | i64 | u64 |
| 128-bit | i128 | u128 |
| arch | isize | usize |

另外，isize 和 usize 类型依赖运行程序的计算机架构：64 位架构上它们是 64 位的， 32 位架构上它们是 32 位的。

可以使用表格 3-2 中的任何一种形式编写数字字面值。请注意可以是多种数字类型的数字字面值允许使用类型后缀，例如 57u8 来指定类型，同时也允许使用 \_ 做为分隔符以方便读数，例如1\_000，它的值与你指定的 1000 相同。

| 数字字面值 | 例子 |
| :--- | :--- |
| Decimal \(十进制\) | 98\_222 |
| Hex \(十六进制\) | 0xff |
| Octal \(八进制\) | 0o77 |
| Binary \(二进制\) | 0b1111\_0000 |
| Byte \(单字节字符\)\(仅限于u8\) | b'A' |

那么该使用哪种类型的数字呢？如果拿不定主意，Rust 的默认类型通常是个不错的起点，数字类型默认是 `i32`。`isize` 或 `usize` 主要作为某些集合的索引。

#### 浮点型

只有 `f32` 和 `f64` 之分，但是在现代CPU上，他们的速度差不多。

#### 布尔型

标注：bool

#### 字符类型

目前为止只使用到了数字，不过 Rust 也支持字母。Rust 的 char 类型是语言中最原生的字母类型，如下代码展示了如何使用它。（注意 char 由单引号指定，不同于字符串使用双引号。）Rust 的 char 类型的大小为四个字节\(four bytes\)，并代表了一个 Unicode 标量值（Unicode Scalar Value），这意味着它可以比 ASCII 表示更多内容。在 Rust 中，拼音字母（Accented letters），中文、日文、韩文等字符，emoji（绘文字）以及零长度的空白字符都是有效的 char 值。Unicode 标量值包含从 U+0000 到 U+D7FF 和 U+E000 到 U+10FFFF 在内的值。不过，“字符” 并不是一个 Unicode 中的概念，所以人直觉上的 “字符” 可能与 Rust 中的 char 并不符合。第八章的 “使用字符串存储 UTF-8 编码的文本” 中将详细讨论这个主题。

### 复合类型 （Compound types）

可以将多个值组合成一个类型。Rust有两个原生的复合类型，**元组和数组**。

#### 元组 Tuple

* Tuple 可以将不同类型的多个值放到一个类型里
* Tuple 的长度是固定的，一旦声明就无法改变

```javascript
let tup: (i32, f64, u8) = (500, 6.4, 1);
let (x, y, z) = tup; // 解构
let five_hundred = x.0; // 直接访问
```

#### 数组 Array

```javascript
// 定义一个数组 [类型;长度] = [...]
let arr: [i32; 5] = [1,2,3,4,5];

// 定义并全部初始化一个数组 [value; len] [3,3,3,3,3]
let arr = [3; 5];
```

