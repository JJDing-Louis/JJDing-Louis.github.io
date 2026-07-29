---
id: python-ch05
locale: zh-TW
title: Python Ch05 函式
summary: 介紹函式定義、參數與回傳值。
slug: ch05-functions
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch05 函式.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch05 函式</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-5">
                            <h5><a href="#5-1">5-1 函式的定義</a></h5>
                            <h5><a href="#5-2">5-2 沒有參數也沒有回傳值</a></h5> 
                            <h5><a href="#5-3">5-3 函式回傳值</a></h5> 
                            <h5><a href="#5-4">5-4 帶有參數的回傳值</a></h5>
                            <h5><a href="#5-5">5-5 回傳多個值</a></h5>
                            <h5><a href="#5-6">5-6 函式預設參數值</a></h5>                                      
                        </div>                        
                    </div>       
                    </div>
                <h3 id="4-1">5-1 函式的定義</h3>
                <p></p>
                <h4>語法:</h4>
                <p></p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        def 函式名稱(引數1, 引數2, 引數3.....)
                            程式碼內容
                            return 參數1, 參數2, 參數3.....
                    </code>         
                </pre>
                <p>傳寫一個程式產生10個亂數，程式如下所示:</p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        def printStar(n):
                        for i in range(1,n+1):
                            print('*',end = ' ')
                        print()
                        def main():
                            printStar(20)
                            printStar(30)
                            printStar(50)
                    
                        main()
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        * * * * * * * * * * * * * * * * * * * * 
                        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
                        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                    </code>         
                </pre>
                <p></p>
                <h3 id="5-2">5-2 沒有參數也沒有回傳值</h3>
                <p>當迴圈有固定的執行次數時，我們稱之為定數迴圈。例如:</p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python ">
                        def total():
                        sum = 0
                        for i in range(1, 101):
                            sum += i
                        print('summation of  1 to 100:', sum)
                        
                        def main():
                            total()
                        main()
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        summation of  1 to 100: 5050                       
                    </code>         
                </pre>
                <p>如果要檢視所產生的的亂數中有多少個偶數或是奇數，此時就須配合選擇敘述做判斷，如以下程式碼:</p>
                <p></p>
                <h3 id="5-3">5-3 函式回傳值</h3>
                <p></p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                    def 函式名稱():
                        執行內容
                        return 回傳結果
                    </code>         
                </pre>
                <p></p>
                <h4>範例程式:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def total():
                        sum = 0
                        for i in range(1, 101):
                            sum += i
                        return sum
                    
                        def main():
                            t = total()
                            print('summation of 1 to 100:', t)
                        
                        main()
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        summation of 1 to 100: 5050
                    </code>         
                </pre>
                <p></p>
                <h3 id="5-4">5-4 帶有參數和回傳值</h3>
                <p></p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def 函式名稱(參數1, 參數2...):
                            執行內容
                            return 回傳結果
                    </code>         
                </pre>
                <p></p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def total(a, b):
                        sum = 0
                        for i in range(a, b+1):
                            sum += i
                        return  sum
                    
                        def  main():
                            x = eval(input('Enter start number: '))
                            y = eval(input('Enter end number: '))
                            t = total(x, y)
                            print('summation of %d to %s: %d'%(x, y, t))
                        
                        main()
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter start number: 2
                        Enter end number: 100
                        summation of 2 to 100: 5049                        
                    </code>         
                </pre>
                <p>(二)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter start number: 1
                        Enter end number: 101
                        summation of 1 to 101: 5151                      
                    </code>         
                </pre>
                <p></p>
                <h3 id="5-5">5-5 回傳多個值</h3>
                <p></p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def 函式名稱(參數1, 參數2...):
                            執行內容
                            return 結果1, 結果2...
                    </code>         
                </pre>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def sumAndAverage(n1, n2):
                        total = 0
                        average = 0.0
                        for i in range(n1, n2 + 1):
                            total += i
                        average = total / (n2 - n1 + 1)
                        return total, average
                    
                    
                        def main():
                            s, a = sumAndAverage(1, 100)
                            print('sum = %d, average = %2.2f' % (s, a))
                        
                        
                        main()
                    </code>         
                </pre>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        sum = 5050, average = 50.50                       
                    </code>         
                </pre>
                <h3 id="5-6">5-6 函式預設參數值</h3>
                <p>使用函式時，可以輸入參數，若不輸入參數，則系統則以預測值的內容去做計算。</p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def 函式名稱(參數1 = 預設值, 參數2...):
                            執行內容
                            return 結果1, 結果2...
                    </code>         
                </pre>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        def sumAndAverage(n1, n2=100):
                        total = 0
                        average = 0.0
                        for i in range(n1, n2+1):
                            total += i
                        average = total/(n2-n1+1)
                        return total, average
                    
                        def main():
                            s,a =sumAndAverage(1)
                            print('sum = %d, average = %d'%(s,a))
                            s,a =sumAndAverage(1, 10)
                            print('sum = %d, average = %d'%(s,a))
                        
                        main()
                    </code>         
                </pre>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        sum = 5050, average = 50
                        sum = 55, average = 5                      
                    </code>         
                </pre>
