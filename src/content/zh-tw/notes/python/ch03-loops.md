---
id: python-ch03
locale: zh-TW
title: Python Ch03 迴圈敘述
summary: 介紹 for、while 與迴圈控制。
slug: ch03-loops
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch03 迴圈敘述.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch03 迴圈敘述</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-5">
                            <h5><a href="#3-1">3-1 while敘述</a></h5>
                            <h5><a href="#3-2">3-2 for...in range 迴圈</a></h5> 
                            <h5><a href="#3-3">3-3 巢狀迴圈</a></h5>                                       
                        </div>                        
                    </div>       
                    </div>
                <p>迴圈敘述(loop statement)表示重複執行某些敘述。迴圈敘述主要分三個條件，分別是"初執運算設定"、"條件運算式"，以及"更新運算式"。在Python的迴圈敘述分別以while和for in range的方式表示。</p>
                <h3 id="3-1">3-1 while敘述</h3>
                <p></p>
                <h4>語法:</h4>
                <p></p>
                <p>while的迴圈敘述如下:</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        初值設定
                        while 條件運算式:
                            主體敘述
                    </code>         
                </pre>
                <p>while敘述流程如下:</p>
                <img src="/imges/fig3-1.JPG" width="720" height="150" >
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        i = 1
                        total = 0
                        while i <= 100:
                            total += i
                            i += 1
                        print('total = ', total)

                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        total = 5050
                    </code>         
                </pre>
                <P></P>
                <h3 id="3-2">3-2 for...in range 迴圈</h3>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        for i in range(start, end, step):
                    </code>         
                </pre>
                <p>表示 i 是從start值開始，直到end-1，中間的過程是每次值step值，若值為 1 ，則可省略。</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        total = 0
                        for i in range(1, 101):
                            total += i
                        print('total = ',total)
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        total = 5050
                    </code>         
                </pre>
                <p></p>
                <h3 id="3-3">3-3 巢狀迴圈</h3>
                <p></p>
                <p>巢狀迴圈(nested loop)或稱多重迴圈，顧名思義為迴圈內又有一回圈。</p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        for i in raneg(start, end, step):
                            /敘述內容1/
                            for j in range(start, end, step):
                                /敘述內容2/
                    </code>         
                </pre>
                <p></p>
                <p>若是while迴圈，則:</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        while(判斷條件1):
                            /敘述內容1/
                            while(判斷條件2):
                                /敘述內容2/
                    </code>         
                </pre>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        print('=====')
                        for x in range(1, 6):
                            print('x = %d'%(x))
                            for y in range(1, 6):
                                print(' y = %d'%(y))
                            print('=====')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        =====
                        x = 1
                         y = 1
                         y = 2
                         y = 3
                         y = 4
                         y = 5
                        =====
                        x = 2
                         y = 1
                         y = 2
                         y = 3
                         y = 4
                         y = 5
                        =====
                        x = 3
                         y = 1
                         y = 2
                         y = 3
                         y = 4
                         y = 5
                        =====
                        x = 4
                         y = 1
                         y = 2
                         y = 3
                         y = 4
                         y = 5
                        =====
                        x = 5
                         y = 1
                         y = 2
                         y = 3
                         y = 4
                         y = 5
                        =====
                    </code>         
                </pre>
                <p></p>
                <p>如果想做一個九九乘法表，可參考以下程式碼:</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        for i in range(125):
                             print('=', end='')
                        print()
                        for i in range(1,10):
                            for j in range(1, 10):
                                if j < 9:
                                    print('%2d x %2d =%3d '%(j,i,i*j), end=' ')
                                else:
                                    print('%2d x %2d =%3d ' % (j, i, i*j))
                        for i in range(125):
                            print('=', end='')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        =============================================================================================================================
                        1 x  1 =  1   2 x  1 =  2   3 x  1 =  3   4 x  1 =  4   5 x  1 =  5   6 x  1 =  6   7 x  1 =  7   8 x  1 =  8   9 x  1 =  9 
                        1 x  2 =  2   2 x  2 =  4   3 x  2 =  6   4 x  2 =  8   5 x  2 = 10   6 x  2 = 12   7 x  2 = 14   8 x  2 = 16   9 x  2 = 18 
                        1 x  3 =  3   2 x  3 =  6   3 x  3 =  9   4 x  3 = 12   5 x  3 = 15   6 x  3 = 18   7 x  3 = 21   8 x  3 = 24   9 x  3 = 27 
                        1 x  4 =  4   2 x  4 =  8   3 x  4 = 12   4 x  4 = 16   5 x  4 = 20   6 x  4 = 24   7 x  4 = 28   8 x  4 = 32   9 x  4 = 36 
                        1 x  5 =  5   2 x  5 = 10   3 x  5 = 15   4 x  5 = 20   5 x  5 = 25   6 x  5 = 30   7 x  5 = 35   8 x  5 = 40   9 x  5 = 45 
                        1 x  6 =  6   2 x  6 = 12   3 x  6 = 18   4 x  6 = 24   5 x  6 = 30   6 x  6 = 36   7 x  6 = 42   8 x  6 = 48   9 x  6 = 54 
                        1 x  7 =  7   2 x  7 = 14   3 x  7 = 21   4 x  7 = 28   5 x  7 = 35   6 x  7 = 42   7 x  7 = 49   8 x  7 = 56   9 x  7 = 63 
                        1 x  8 =  8   2 x  8 = 16   3 x  8 = 24   4 x  8 = 32   5 x  8 = 40   6 x  8 = 48   7 x  8 = 56   8 x  8 = 64   9 x  8 = 72 
                        1 x  9 =  9   2 x  9 = 18   3 x  9 = 27   4 x  9 = 36   5 x  9 = 45   6 x  9 = 54   7 x  9 = 63   8 x  9 = 72   9 x  9 = 81 
                        =============================================================================================================================
                    </code> 
                </pre>
