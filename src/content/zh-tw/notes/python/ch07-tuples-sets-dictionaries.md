---
id: python-ch07
locale: zh-TW
title: Python Ch07 數組、集合、辭典
summary: 介紹 tuple、set 與 dictionary 的基本觀念。
slug: ch07-tuples-sets-dictionaries
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch07 數組、集合、辭典.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch07 數組、集合、辭典</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-4">
                            <h5><a href="#7-1">7-1 數組</a></h5>
                            <ul>
                                <li><a href="#7-1-1">7-1-1 建立數組</a></li>
                            </ul>
                            <h5><a href="#7-2">7-2 集合</a></h5> 
                            <ul>
                                <li><a href="#7-2-1">7-2-1 建立集合</a></li>
                                <li><a href="#7-2-2">7-2-2 集合的加入與刪除</a></li>
                                <li><a href="#7-2-3">7-2-3 集合的聯集、交集、差集，以及對稱差集</a></li>
                                <li><a href="#7-2-4">7-2-4 子集合、超集合，以及 == 和 !=</a></li>
                            </ul>
                            <h5><a href="#7-3">7-3 辭典</a></h5> 
                            <ul>
                                <li><a href="#7-3-1">7-3-1 建立一辭典</a></li>
                                <li><a href="#7-3-2">7-3-2 辭典的運作</a></li>
                            </ul>
                        </div>                        
                    </div>
        
                    </div>
                <h3 id="7-1">7-1-1 建立數組</h3>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''數組是以小括號建立，並以逗號分開'''
                        >>> tuple1 = (2, 4, 1, 3, 9, 5)
                        >>> tuple1
                        (2, 4, 1, 3, 9, 5)

                        '''空數組'''
                        tuple = ()

                        '''從串列中建立數組'''
                        >>> tuple3 = tuple([x for x in range(1, 6)])
                        >>> tuple3
                        (1, 2, 3, 4, 5)

                        '''也可以從字串建立數組'''
                        >>> tuple4 = tuple('Python')
                        >>> tuple4
                        ('P', 'y', 't', 'h', 'o', 'n')

                        '''可以搭配len、min、max、sum座使用，同時也可以搭配in、not in、*以及 + 的運算子'''
                        >>> tuple1 = (2, 4, 1, 3, 9, 5)
                        >>> len(tuple1)
                        6
                        >>> max(tuple1)
                        9
                        >>> min(tuple1)
                        1
                        >>> sum(tuple1)
                        24
                        >>> 8 in tuple1
                        False
                        >>> 9 in tuple1
                        True
                        >>> 9 not in tuple1
                        False

                        >>> tuple1 += (6,)
                        >>> tuple1
                        (2, 4, 1, 3, 9, 5, 6)
                        '''也可一次連接兩個元素'''
                        >>> tuple1 += (7, 8)
                        >>> tuple1
                        (2, 4, 1, 3, 9, 5, 6, 7, 8)

                        '''擷取某一段元素'''
                        >>> tuple1[2]
                        1
                        >>> tuple1[3: 6]
                        (3, 9, 5)

                        >>> tuple2 = 2 * tuple1
                        >>> tuple2
                        (2. 4, 1, 3, 9, 5, 6, 2, 4, 1, 3, 9, 5, 6)

                        '''可搭配for迴圈印出整個數組'''
                        >>> for i in tuple1:
                            print(i, end = ' ') 
                            2 4 1 3 9 5 6 7 8 

                        '''用 del 刪除整組數組'''
                        >>> del tuple1
                        >>> tuple1
                        <class 'tuple1'>
                    </code> 
                </pre>
                <p></p>
                <h3 id="7-2">7-2 集合</h3>
                <p></p>
                <h4 id="7-2-1">7-2-1 建立集合</h4>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''集合是以大括號建立的，元素志堅以逗號隔開'''
                        set1 = {1, 3, 5}
                        '''建立空集合'''
                        set2 = set()
                        '''也可以從串列或數組建立資料'''
                        >>> set3 = set([x for x in range(1,6)])
                        >>> set3
                        {1, 2, 3, 4, 5}
                        '''而下面是從數組加以建立集合的資料:'''
                        >>> set4= set((1,2,3))
                        >>> set4
                        {1, 2, 3}
                        '''集合的特性，不會包含重複的資料'''
                        >>> set5 = set((1,1,2,2,3,3,))
                        >>> set5
                        {1, 2, 3}
                    </code> 
                </pre>
                <p></p>
                <h4 id="7-2-2">7-2-2 集合的加入與刪除</h4>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''使用add(x)將 x 加入集合中 '''
                        >>> set10 = {1, 3, 6}
                        >>> set10.add(20)
                        >>> set10
                        {1, 3, 6, 20}
                        '''使用remove(x)將 x 從集合中刪除 '''
                        >>> set10.remove(3)
                        >>> set10
                        {1, 6, 20}
                        '''可以使用計算長度的len()，計算總合的sum(x)、求出最大和最小值的max()與min()'''
                        >>> set20 = {1, 3, 6, 8, 10}
                        >>> len(set20)
                        5
                        >>> sum(set20)
                        28
                        >>> max(set20)
                        10
                        >>> min(set20)
                        1
                        '''同樣的也可以使用in、not in去撿是某一元素是否在集合中'''
                        >>> set20 = {1,3,6,8,10}
                        >>> 4 in set20
                        False
                        >>> 8 in set 20
                        True
                        '''要印出集合中所有元素，可用for迴圈'''
                        >>> for x in set20:
                            print(x, end = ' ')
                        1 3 6 8 10
                    </code> 
                </pre>

                <h4 id="7-2-3">7-2-3 集合的聯集、交集、差集，以及對稱差集</h4>
                <p></p>
                <table>
                    <h5>表7-1 集合的聯集、交集、差集，以及對稱差集</h5>
                    <p></p>
                    <hr>
                    <table class="table text-center col-6" border="3" width="80%" cellspacing="5" cellpading="5" >
                        <thead class="thead-light">
                        <tr>
                            <th>名稱</th>
                            <th>運算符</th>
                            <th>示範</th>
                        </tr>
                        <tr>
                            <td>聯集</td>
                            <td> | 或 union()</td>
                            <td>set1 | set2 或 set1.union(set2)</td>
                        </tr>
                        <tr>
                            <td>交集</td>
                            <td> & 或 intersection()</td>
                            <td>set1 & set2 或 set1.intersection(set2)</td>
                        </tr>
                        <tr>
                            <td>差集</td>
                            <td> - 或 difference()</td>
                            <td>set1 - set2 或 set1.difference(set2)</td>
                        </tr>
                        <tr>
                            <td>對稱差集</td>
                            <td> ^ 或 symmetric_difference()</td>
                            <td>set1 ^ set2 或 set1.symmetric_difference(set2)</td>
                        </tr>
                        </thead>
                    </table>    
                </table>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        set20 = {1, 6, 8, 10, 20}
                        set25 = {1, 3, 8, 10}
                        print('set20 =',set20)
                        print('set25 =',set25)
                        '''聯集'''
                        a = set20 | set25
                        print('set20 | set25 = ', a)
                        '''交集'''
                        b = set20 & set25
                        print('set20 & set25 = ', b)
                        '''差集'''
                        c = set20 - set25
                        print('set20 - set25 = ', c)
                        '''對稱差集'''
                        c = set20 ^ set25
                        print('set20 ^ set25 = ', c)
                        
                    </code> 
                </pre>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        set20 = {1, 6, 8, 10, 20}
                        set25 = {8, 1, 10, 3}
                        set20 | set25 =  {1, 3, 6, 8, 10, 20}
                        set20 & set25 =  {8, 1, 10}
                        set20 - set25 =  {20, 6}
                        set20 ^ set25 =  {3, 6, 20}
                    </code> 
                </pre>

                <h4 id="7-2-4">7-2-4 子集合、超集合，以及 == 和 !=</h4>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        set15 = {1, 3, 8, 10}
                        set20 = {1, 3, 8}
                        '''子集合'''
                        a = set20.issubset(set15)
                        '''超集合'''
                        b = set15.issuperset(set20)

                        print('set15 =', set15)
                        print('set20 =', set20)
                        print('''子集合''')
                        print('set20.issubset(set15)', a)
                        print('''超集合''')
                        print('set15.issuperset(set20)', b)
                    </code> 
                </pre>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        set15 = {8, 1, 10, 3}
                        set20 = {8, 1, 3}
                        子集合
                        set20.issubset(set15) True
                        超集合
                        set15.issuperset(set20) True
                    </code> 
                </pre>
                <p></p>
                <h5>集合的相等性</h5>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        set15 = {1, 3, 8, 10}
                        set20 = {1, 3, 8}
                        set30 = {1, 3, 8}
                        '''相等'''
                        a = set20 == set30
                        '''不相等'''
                        b = set20 != set30

                        print('set15 =', set15)
                        print('set20 =', set20)
                        print('set30 =', set30)
                        print('''相等''')
                        print('set20 == set30 :', a)
                        print('''不相等''')
                        print('set20 != set30 :', b)
                    </code> 
                </pre>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        set15 = {8, 1, 10, 3}
                        set20 = {8, 1, 3}
                        set30 = {8, 1, 3}
                        相等
                        set20 == set30 : True
                        不相等
                        set20 != set30 : False
                    </code> 
                </pre>
                <p></p>
                <h3 id="7-3">7-3 辭典</h3>
                <p></p>
                <p>辭典(dictionary)由一鍵值(key)和數值(value)所組成的數對。</p>
                <P></P>
                <h4 id="7-3-1">7-3-1 建立一辭典</h4>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''建立一個空字典'''
                        dict10 = {}
                        '''每一個字典是由key與value組成，用逗號隔開'''
                        dict10 = {'Taipei':'101', 'Paris':'Tour Eiffel', 'London':'Big Ben'}
                    </code> 
                </pre>
                <p></p>
                <h4 id="7-3-2">7-3-2 辭典的運作</h4>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        '''建立一個空字典'''
                        dict10 = {}
                        '''每一個字典是由key與value組成，用逗號隔開'''
                        dict10 = {'Taipei':'101', 'Paris':'Tour Eiffel', 'London':'Big Ben'}
                        '''加入一個辭典的項目'''
                        >>> dict10['Berlin'] = 'Wall'
                        >>> dict10
                        {'Taipei': '101', 'Paris': 'Tour Eiffel', 'London': 'Big Ben', 'Berlin': 'Wall'}
                        '''利用for迴圈印出內容'''
                        >>> for key in dict10:
                            print('%s:%s'%(key, dict10[key]))

                        Taipei:101
                        Paris:Tour Eiffel
                        London:Big Ben
                        Berlin:Wall
                        '''利用[]運算子，得到對應的key、value'''
                        >>>dict10['Taipei']
                        '101'
                        '''可以len()計算字典長度，用in、not in畔對字典內受否有該元素'''
                        >>> len(dict10)
                        4
                        >>> 'Taipei' in dict10
                        True
                        >>>'Tainan' in dict10
                        False
                        >>>'Tainan' not in dict10
                        True
                        >>> dict12 = {10: 'John', 30: 'Peter', 20: 'Mary'}
                        >>> dict22 = {10: 'John', 20: 'Mary', 30: 'Peter'}
                        >>> dict12 == dict22
                        True
                        >>> dict12 != dict22
                        False
                        '''利用del刪除字典中的某一項目'''
                        >>>del dict10['Taipei']
                        >>> dict10
                        {'Paris': 'Tour Eiffel', 'London': 'Big Ben', 'Berlin': 'Wall'}
                        '''利用keys()可以得到辭典中項目的鍵值'''
                        >>> dict10.keys()
                        dict_keys(['Paris', 'London', 'Berlin'])
                        '''同樣地values可以得到辭典裡所有項目的數值'''
                        >>>dict10.values()
                        dict_values(['Tour Eiffel', 'Big Ben', 'Wall'])
                        '''items()表示辭典內的所有項目'''
                        >>> dict10.items()
                        dict_items([('Paris', 'Tour Eiffel'), ('London', 'Big Ben'), ('Berlin', 'Wall')])
                        '''利用tuple()可以省略掉dict_'''
                        >>> tuple(dict10.keys())
                        ('Paris', 'London', 'Berlin')
                        >>> dict10.values())
                        ('Tour Eiffel', 'Big Ben', 'Wall')
                        >>> dict10.items())
                        (('Paris', 'Tour Eiffel'), ('London', 'Big Ben'), ('Berlin', 'Wall'))
                        '''利用pop()可以刪除某一項目'''
                        >>> dict10 = {'Paris': 'Tour Eiffel', 'London': 'Big Ben','Berlin': 'Wall'}
                        >>> dict10.pop('Paris'))
                        'Tour Eiffel'
                        >>> dict10
                        {'London': 'Big Ben', 'Berlin': 'Wall'}
                        '''利用popitems()可以刪除最後一個項目'''
                        >>> dict10 = {'London': 'Big Ben', 'Berlin': 'Wall', 'Taipei': '101'}
                        >>> dict10.popitem()
                        ('Taipei', '101')
                        >>> dict10.popitem()
                        ('Berlin', 'Wall')
                        '''利用clear()可以刪除所有項目'''
                        >>> dict10 = {'London': 'Big Ben', 'Berlin': 'Wall', 'Taipei': '101'}
                        >>> dict10.clear()
                        >>> dict10
                        {}
                        '''copy()是將某一辭典婦到另一個辭典'''
                        >>> dict1 = {1:'Red', 2:'Yellow', 3:'Green'}
                        >>>dict1
                        {1: 'Red', 2: 'Yellow', 3: 'Green'}
                        >>> dict2 = {4:'Black', 1:'Red'}
                        >>> dict2
                        {4: 'Black', 1: 'Red'}
                        >>> dict3 = dict1.copy()
                        >>> dict3
                        {1: 'Red', 2: 'Yellow', 3: 'Green'}
                        '''update()是兩個辭典合併，若有相同的鍵值，只取一個鍵值'''
                        >>> dict3.update(dict2)
                        >>> dict3
                        {1: 'Red', 2: 'Yellow', 3: 'Green', 4: 'Black'}
                    </code> 
                </pre>
