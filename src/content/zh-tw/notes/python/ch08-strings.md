---
id: python-ch08
locale: zh-TW
title: Python Ch08 字串
summary: 整理字串操作、格式化與常見函式。
slug: ch08-strings
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch08 字串.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch08 字串</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-4">
                            <h5><a href="#8-1">8-1 建立空字串</a></h5>
                            <h5><a href="#8-2">8-2 字串的運作</a></h5> 
                            <h5><a href="#8-3">8-3 測試字串</a></h5> 
                            <h5><a href="#8-4">8-4 子字串的運作</a></h5> 
                            <h5><a href="#8-5">8-5 轉換字串</a></h5> 
                            <h5><a href="#8-6">8-6 如何從字串中去掉頭尾空白</a></h5> 
                            <h5><a href="#8-7">8-3 如何將字串加以格式化</a></h5> 
                        </div>                        
                    </div>        
                    </div>
                <h3 id="8-1">8-1 建立空字串</h3>
                <p>建立字串有兩種方式，一是以str()，二是以"表示之</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''方法(一)'''
                        >>> s1 = str()
                        >>> s1
                        ''
                        '''方法(二)'''
                        >>> s2 = ''
                        >>> s2
                        ''
                    </code> 
                </pre>

                <h3 id="8-2">8-2 字串的運作</h3>
                <p>初始化字串有兩種方式，一是以str()，二是以"表示之</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''方法(一)'''
                        >>> s3 = 'Learing Python now!'
                        >>> s3
                        'Learing Python now!'
                        '''方法(二)'''
                        >>> s4 = str('Learing Python now!'')
                        >>> s4
                        'Learing Python now!'
                    </code> 
                </pre>

                <p>若要計暗算字串長度用len()，利用max()與利用min()函式分別計算字串的最大與最小值</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> len(s3)
                        20
                        >>>max(s3)
                        'y'
                        >>>min(s3)
                        ''                        
                    </code> 
                </pre>

                <p>索引運算子 [] 用來擷取字串的某一字元</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s3[3]
                        'r'
                        >>> s4 = 'Python'
                        >>> s4[-1]
                        'n'
                        >>> s4[-3]
                        'h'                        
                    </code> 
                </pre>

                <p>使用分割運算子 [start: end] 表示擷取從start 到 end-1。</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s4[1:4]
                        'yth'
                        >>> s3[:4]
                        'Pyth'
                        >>> s3[1:]
                        'ython'
                        >>> s3[1:-1]
                        'ytho'                        
                    </code> 
                </pre>

                <p>+表示連接，而*表示複製</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s5 = 'Bright'
                        >>> s6 = 'Tsai'
                        >>> s6 = ' Tsai'
                        >>> s5+s6
                        'Bright Tsai'
                        >>> s5*2
                        'BrightBright'
                    </code> 
                </pre>

                
                <p>可用 in 或 not in 檢查字串是否包含該元素</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> 'B' in s5
                        True
                        >>> 'T' not in s6
                        False

                        >>> 'B' in s5
                        True
                        >>> 'T' not in s6
                        False
                    </code> 
                </pre>

                <p>配合for敘述可以列印字串的所有元素值</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> for i in s5:
                            print(i, end=' ')

                        B r i g h t
                    </code> 
                </pre>

                <h3 id="8-3">8-3 測試字串</h3>
                <p>辭典(dictionary)由一鍵值(key)和數值(value)所組成的數對。</p>
                <h5>表6-2 有關串列運作之方法</h5>
                <hr>
                <table class="table text-center col-6" border="3" width="60%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>方法</th>
                        <th>說明</th>
                    </tr>
                    <tr>
                        <td>isalnum()</td>
                        <td>若字串的字元是字母和數字所組成，則回傳True</td>
                    </tr>
                    <tr>
                        <td>isalpha</td>
                        <td>若字串的字元是字母所組成，則回傳True</td>
                    </tr>
                    <tr>
                        <td>isdigit()</td>
                        <td>若字串的字元是數字所組成，則回傳True</td>
                    </tr>
                    <tr>
                        <td>isdentifier()</td>
                        <td>若字串的字元是符合識別字元，則回傳True</td>
                    </tr>
                    <tr>
                        <td>islower</td>
                        <td>若字串的英文字元皆是由小寫字母所組成，則回傳True</td>
                    </tr>
                    <tr>
                        <td>isupper</td>
                        <td>若字串的英文字元皆是由大寫字母所組成，則回傳True</td>
                    </tr>
                    <tr>
                        <td>isspace</td>
                        <td>若字串的英文字元皆是由白色空白所組成，則回傳True</td>
                    </tr>
                    </thead>
                </table>
                
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s5 = 'Bright'
                        >>> s5.isalnum()
                        True
                        >>> s5.isalpha()
                        True
                        >>> s8 = 'Linda'
                        >>> s8.isalmun()
                        True
                        >>> s8.isalpha()
                        True
                        >>> s8.isdigit()
                        False
                        >>> s8.isidentifier()
                        True
                        >>> s8.isupper()
                        False
                        >>> s8.islower()
                        False
                        >>> s8.isspace()
                        False
                        >>> s9 = 'abcde'
                        >>> s9.islower()
                        True
                    </code> 
                </pre>

                <h3 id="8-4">8-4 子字串的運作</h3>
                <p>辭典(dictionary)由一鍵值(key)和數值(value)所組成的數對。</p>
                <h5>表8-4 子字串的運作方法</h5>
                <hr>
                <table class="table text-center col-6" border="3" width="60%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>方法</th>
                        <th>說明</th>
                    </tr>
                    <tr>
                        <td>endswith(s1)</td>
                        <td>若字串的尾端是s1時，則回傳True</td>
                    </tr>
                    <tr>
                        <td>startswith</td>
                        <td>若字串的開頭是s1時，則回傳True</td>
                    </tr>
                    <tr>
                        <td>find(s1)</td>
                        <td>找尋字串中出現s1子字串的最小索引值，並加以回傳</td>
                    </tr>
                    <tr>
                        <td>rfind(s1)</td>
                        <td>找尋字串中出現s1子字串的最大索引值，並加以回傳</td>
                    </tr>
                    <tr>
                        <td>count(s1)</td>
                        <td>計算字串中出現s1子字串的個數</td>
                    </tr>
                    </thead>
                </table>
                
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s8 = 'Linda'
                        >>> s8.endswith('da')
                        True
                        >>> s8.startswith('Li')
                        True
                        >>> s8.find('d')
                        3
                        >>> s10 = 'abcdeabcde'
                        >>> s10.rfind('e')
                        9
                        >>> s10.count('e')
                        2
                    </code> 
                </pre>

                <h3 id="8-5">8-5 轉換字串</h3>
                <h5>表8-3 轉換字串的方法</h5>
                <hr>
                <table class="table text-center col-6" border="3" width="60%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>方法</th>
                        <th>說明</th>
                    </tr>
                    <tr>
                        <td>capitalize()</td>
                        <td>將字串中的第一個字轉成大寫，其餘的字轉換成小寫加以回傳。</td>
                    </tr>
                    <tr>
                        <td>lower()</td>
                        <td>將字串的所有字元轉換成小寫後加以回傳。</td>
                    </tr>
                    <tr>
                        <td>upper()</td>
                        <td>將字串的所有字元轉換成大寫後加以回傳。</td>
                    </tr>
                    <tr>
                        <td>title()</td>
                        <td>將字串中的每一個單字的第一個字轉成大寫，其餘的字轉換成小寫加以回傳。</td>
                    </tr>
                    <tr>
                        <td>swapcase()</td>
                        <td>將字串中的每一個單字的大寫轉小寫，小寫轉大寫後加以回傳。</td>
                    </tr>
                    <tr>
                        <td>replace(old, new)</td>
                        <td>將old字串以new字串取代之</td>
                    </tr>
                    </thead>
                </table>
                
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s11 = 'welcome to Taipei'
                        >>> s11.capitalize()
                        'welcome to taipei'
                        >>> s11.lower()
                        'welcome to taipei'
                        >>> s11.upper()
                        'WELCOME TO TAIPEI'
                        >>> s11.swapcase()
                        'WELCOME TO tAIPEI'
                        >>> s11.title()
                        'Welcome To Taipei'
                        >>> s11.replace('Taipei', 'Tainan')
                        'Welcome to Tainan'
                    </code> 
                </pre>

                <h3 id="8-6">8-6 如何從字串中去掉頭尾空白</h3>
                <h5>表8-3 從字串中去掉頭尾空白的部分</h5>
                <hr>
                <table class="table text-center col-6" border="3" width="60%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>方法</th>
                        <th>說明</th>
                    </tr>
                    <tr>
                        <td>lstrip()</td>
                        <td>將字串中的第一個字轉成大寫，其餘的字轉換成小寫加以回傳。</td>
                    </tr>
                    <tr>
                        <td>rstrip()</td>
                        <td>將字串的所有字元轉換成小寫後加以回傳。</td>
                    </tr>
                    <tr>
                        <td>strip()</td>
                        <td>將字串的所有字元轉換成大寫後加以回傳。</td>
                    </tr>
                    </thead>
                </table>                
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s12 = '  Learing Python now!  '
                        >>> s12 
                        '  Learing Python now!  '
                        >>> s12.lstrip()
                        'Learing Python now!  '
                        >>> s12 
                        '  Learing Python now!  '
                        >>> s12.rstrip()
                        '  Learing Python now!'
                        >>> s12
                        '  Learing Python now!  '
                        >>> s12.strip()
                        'Learing Python now!'
                        >>> s12
                        '  Learing Python now!  '
                    </code> 
                </pre>

                <h3 id="8-7">8-7 如何將字串加以格式化</h3>
                <h5>表8-3 將字串加以格式化的方法</h5>
                <hr>
                <table class="table text-center col-6" border="3" width="60%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>方法</th>
                        <th>說明</th>
                    </tr>
                    <tr>
                        <td>center(width)</td>
                        <td>在給予 width的欄位寬下向中靠齊，並加以回傳。</td>
                    </tr>
                    <tr>
                        <td>ljust(width)</td>
                        <td>在給予 width的欄位寬下向左靠齊，並加以回傳。</td>
                    </tr>
                    <tr>
                        <td>rjust(width)</td>
                        <td>在給予 width的欄位寬下向右靠齊，並加以回傳。</td>
                    </tr>
                    </thead>
                </table>                
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''置中靠齊'''
                        >>> s13 = 'Bright Tsai'
                        >>> s13.center(20)
                        '    Bright Tsai     ' 
                        '''向左靠齊'''
                        >>> s13
                        'Bright Tsai'
                        >>> s13.ljust(20)
                        'Bright Tsai         '
                        '''向右靠齊'''
                        >>> s13
                        'Bright Tsai'
                        >>> s13.rjust(20)
                        '         Bright Tsai'
                    </code> 
                </pre>
                <p>split()方法，將字串解析到串列中，括號內的內容是用來判定分割的依據。</p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        >>> s100 = 'Apple Orange Banana Kiwi'
                        >>> lst = s100.split()
                        >>> lst
                        ['Apple', 'Orange', 'Banana', 'Kiwi']
                        >>> s200 = '01-13-2018'
                        >>> lst2 =s200.split('-')
                        >>> lst2
                        ['01', '13', '2018']
                    </code> 
                </pre>
