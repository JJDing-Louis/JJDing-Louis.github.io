---
id: python-ch04
locale: zh-TW
title: Python Ch04 進階流程控制
summary: 整理進階流程控制與程式結構。
slug: ch04-advanced-flow-control
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch04 進階流程控制.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch04 進階流程控制</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-5">
                            <h5><a href="#4-1">4-1 亂數產生器</a></h5>
                            <h5><a href="#4-2">4-2 定數迴圈與不定數迴圈</a></h5> 
                            <h5><a href="#4-3">4-3 break 與 continue 敘述</a></h5>                                       
                        </div>                        
                    </div>       
                    </div>
                <h3 id="4-1">4-1 亂數產生器</h3>
                <p></p>
                <p>傳寫一個程式產生10個亂數，程式如下所示:</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        import random
                        for i in range(1, 11):
                            randNum = random.randint(1, 100)
                            print('%4d' % randNum, end =' ')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        91  100   42   14   67   43    5   26   33   46
                    </code>         
                </pre>
                <p></p>
                <p>如果要檢視所產生的的亂數中有多少個偶數或是奇數，此時就須配合選擇敘述做判斷，如以下程式碼:</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        import random

                        even = 0
                        odd = 0
                        for i in range(1, 11):
                            randNum = random.randint(1, 100)
                            print('%4d' % randNum, end=' ')
                            if randNum % 2 == 0:
                                even += 1
                            else:
                                odd += 1
                        print('\neven = %d, odd = %d' % (even, odd))                        
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        81   91   10   88    4   99   31   47   46   78 
                        even = 5, odd = 5
                    </code>         
                </pre>
                <p></p>
                <h3 id="4-2">4-2 定數迴圈與不定數迴圈</h3>
                <p></p>
                <p>當迴圈有固定的執行次數時，我們稱之為定數迴圈。例如:</p>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        import random

                        count = 1
                        while count <= 10:
                            for i in range(1, 7):
                                randNum = random.randint(1, 49)
                                print('%3d'%(randNum), end=' ')
                            print()
                            count+=1
                        print('Over')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        38  41  25  37  39   9 
                        40   6  32  14  35  41 
                        23  20  12   4  28  29 
                        36  34  14  17  18  38 
                        39   1  28  21  14  19 
                        45  47   7  17  33  40 
                        23  44  25  19  30  17 
                        22  13  42  34  35  46 
                        29  22  30  14  43  26 
                        14   4  20  33  42  39 
                       Over                       
                    </code>         
                </pre>
                <p>如果要檢視所產生的的亂數中有多少個偶數或是奇數，此時就須配合選擇敘述做判斷，如以下程式碼:</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        import random

                        even = 0
                        odd = 0
                        for i in range(1, 11):
                            randNum = random.randint(1, 100)
                            print('%4d' % randNum, end=' ')
                            if randNum % 2 == 0:
                                even += 1
                            else:
                                odd += 1
                        print('\neven = %d, odd = %d' % (even, odd))                        
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        81   91   10   88    4   99   31   47   46   78 
                        even = 5, odd = 5
                    </code>         
                </pre>
                <p></p>
                <h3 id="4-3">4-3 break 與 continue 敘述</h3>
                <p></p>
                <p>break表示中止執行包含此回區敘述的迴圈。若程式是無窮迴圈，則需要break敘述去中止它。</p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        while True:
                            敘述1
                            if 判斷式:
                                break
                    </code>         
                </pre>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        import random

                        while True:
                            for i in range(1, 7):
                                randNum = random.randint(1,49)
                                print(randNum, end = ' ')
                            print()
                            again = eval(input('continue: 1 or quit: 0 --->'))
                            if again == 0:
                                break
                        print(('Over'))
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        48 18 31 35 14 14 
                        continue: 1 or quit: 0 --->1
                        26 14 26 23 49 41 
                        continue: 1 or quit: 0 --->1
                        6 27 25 16 12 10 
                        continue: 1 or quit: 0 --->1
                        39 38 12 40 15 41 
                        continue: 1 or quit: 0 --->0
                        Over
                    </code>         
                </pre>
                <p></p>
                <p>continue表示不繼續執行continue下的敘述，而直接回到迴圈的條件運算式進行判斷。</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        total = 0
                        number = 1
                        while number <= 15:
                            if number % 5 == 0:
                                number += 1
                                continue
                            print('%3d'%(number), end = ' ')
                            total += number
                            number += 1
                        
                        print('\ntotal = %d'%(total))
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        1   2   3   4   6   7   8   9  11  12  13  14 
                        total = 90
                    </code> 
                </pre>
