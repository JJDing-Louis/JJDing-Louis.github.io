---
id: python-ch02
locale: zh-TW
title: Python Ch02 選擇敘述
summary: 整理 if、elif、else 等選擇敘述基礎。
slug: ch02-conditional-statements
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch02 選擇敘述.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch02 選擇敘述</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-5">
                            <h5><a href="#2-1">2-1 關係運算子</a></h5>
                            <h5><a href="#2-2">2-2 if 敘述</a></h5> 
                            <h5><a href="#2-3">2-3 if...else 敘述</a></h5>
                            <h5><a href="#2-4">2-4 if...elif...else 敘述</a></h5>
                            <h5><a href="#2-5">2-5 邏輯運算子</a></h5>                                          
                        </div>                        
                    </div>       
                            
                </div> <!-- /container -->
                <hr>
                <h3 id="2-1">2-1 關係運算子</h3>
                <p></p>
                <p>在選擇敘述中一定會運用到關係運算子，作為條件運算的真假。</p>
                <p></p>
                <h5>表2-1 關係運算子</h5>
                <hr>
                <table class="table text-center col-md-3" border="3" width="20%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>運算子</th>
                        <th>意義</th>
                    </tr>
                    <tr>
                        <td><</td>
                        <td>小於</td>
                    </tr>
                    <tr>
                        <td><=</td>
                        <td>小於等於</td>
                    </tr>
                    <tr>
                        <td>></td>
                        <td>大於</td>
                    </tr>
                    <tr>
                        <td>>=</td>
                        <td>大於等於</td>
                    </tr>
                    <tr>
                        <td>==</td>
                        <td>等於</td>
                    </tr>
                    <tr>
                        <td>!=</td>
                        <td>不等於</td>
                    </tr>
                    </thead>
                </table>
                <p></p>
                <h3 id="2-2">2-2 if 敘述</h3>
                <p></p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                    if 條件運算式:
                        主體敘述
                    </code>         
                </pre>  
                <p>if敘述的條件運作流程如下:</p>              
                <img src="imges\fig2-1.jpg" width="600" height="150">
                <P></P>
                <p>input()函釋回傳的結果是一個字串，而括號裡面可以放任何想在裡面顯式的訊號，例如:</p>
                <p></p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                    a = eval(input('Enter a number: '))
                    if a > 0:
                        print(a, 'is greater than 0')
                    print('Over')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 100
                        100 is great than 
                        Over
                    </code>         
                </pre>
                <P></P>
                <h3 id="2-3">2-3 if...else 敘述</h3>
                <P></P>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                    if 條件運算式:
                        主體敘述 1
                    else:
                        主體敘述 2    
                    </code>         
                </pre>
                <p>if...else敘述的條件運作流程如下:</p>  
                <img src="imges/fig2-2.jpg" width="600" height="150">
                <P></P>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                    a = eval(input('Enter a number: '))
                    if a > 0:
                        print(a, 'is greater than 0')
                    else:
                        print(a, 'is less than 0')
                    print('Over')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 100
                        100 is great than 
                        Over
                    </code>         
                </pre>
                <p>(二)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: -100
                        -100 is less than 
                        Over
                    </code>         
                </pre>
                <p></p>
                <h3 id="2-4">2-4 if...elif...else 敘述</h3>
                <p></p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                    if 條件運算式:
                        主體敘述 1
                    elif條件運算式:
                        主體敘述 2
                    eles:
                        主體敘述3
                    </code>         
                </pre>
                <p></p>
                <p>if...elif...else敘述的條件運作流程如下:</p>  
                <p></p>
                <img src="imges\fig2-3.jpg" width="600" height="150">
                <p></p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                    a = eval(input('Enter a number: '))
                    if a > 0:
                        print(a, 'is greater than 0')
                    elif a < 0:
                        print(a, 'is less than 0')
                    else:
                        print(a, 'is eaual to 0')
                    print('Over')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 100
                        100 is great than 0
                        Over
                    </code>         
                </pre>
                <p>(二)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: -100
                        -100 is less than 0
                        Over
                    </code>         
                </pre>
                <p>(三)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 0
                        0 is equal to 0 
                        Over
                    </code>         
                </pre>
                <P></P>
                <h3 id="2-5">2-5 邏輯運算子</h3>
                <p></p>
                <h5>表2-3 邏輯運算子</h5>
                <hr>
                <table class="table text-center col-2 " border="3" width="50%" cellspacing="5" cellpading="5" >
                    <thead class="thead-light">
                    <tr>
                        <th>運算子</th>
                        <th>意義</th>
                    </tr>   
                    <tr>
                        <td>and</td>
                        <td>且</td>
                    </tr>
                    <tr>
                        <td>or</td>
                        <td>或</td>
                    </tr> 
                    <tr>
                        <td>not</td>
                        <td>反</td>
                    </tr>                  
                   </thead>
                </table>
                <p>and的左右兩邊的條件敘述要為真的時候，整個條件的結果才為真，or只要一個條件為真，其結果為真，not的作用為把得到的結果由真轉假，由假轉為真。如以下範例:</p>
                <p></p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        num = eval(input('Enter a number: '))
                        if (85<=num) and (num <= 95):
                            print('%d is in the between 85 and 95'%(num))
                        else:
                            print('%d is not in the between 85 and 95'%(num))
                        print('Over')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 100
                        100 is not in the between 85 and 95 
                        Over
                    </code>         
                </pre>
                <p>(二)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 90
                        90 is in the between 85 and 95 
                        Over
                    </code>         
                </pre>
                <p></p>
                <p>其實，也可以這樣改寫</p>
                <h4>範例程式</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                        num = eval(input('Enter a number: '))
                        if (85 <= num <= 95):
                            print('%d is in the between 85 and 95'%(num))
                        else:
                            print('%d is not in the between 85 and 95'%(num))
                        print('Over')
                    </code>         
                </pre>
                <p></p>
                <h4>輸出結果:</h4>
                <p>(一)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 100
                        100 is not in the between 85 and 95 
                        Over
                    </code>         
                </pre>
                <p>(二)</p>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-textile">
                        Enter a number: 90
                        90 is in the between 85 and 95 
                        Over
                    </code>         
                </pre>
