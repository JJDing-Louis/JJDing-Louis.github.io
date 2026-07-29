---
id: python-ch09
locale: zh-TW
title: Python Ch09 檔案與異常處理
summary: 介紹檔案讀寫與異常處理基礎。
slug: ch09-files-and-exceptions
categoryIds:
  - python-basic
publishedAt: 2026-03-15
updatedAt: 2026-03-15
author: JJDing-Louis
status: published
legacyPaths:
  - /html/ProgramNote/Basic/Python/Python Ch09 檔案與異常處理.html
---

<div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Ch09 檔案與異常處理</h1>
                    </div>
                </div>
                <h2>索引</h2>
                <div class="container">
                    <!-- Example row of columns -->
                    <div class="row">
                        <div class="col-md-4">
                            <h5><a href="#9-1">9-1 檔案的運作流程</a></h5>
                            <h5><a href="#9-2">9-2 檔案資料得寫入與讀取</a></h5>
                            <h5><a href="#9-3">8-3 二進位檔案的寫入與讀取</a></h5>
                            <h5><a href="#9-4">9-4 異常處理</a></h5>
                        </div>
                    </div>
                    </div>
                <h3 id="9-1">9-1 檔案的運作流程</h3>
                <p>有關檔案的運作流程如下:</p>
                <ul>
                    <li>1、利用open模式開啟檔案名稱和其模式。</li>
                    <li>2、利用寫入的函式將資料寫入檔案，或是利用讀取的函式從檔案讀取資料。</li>
                    <li>3、利用close函式將檔案關閉</li>
                </ul>
                <p>利用open打開檔案，其語法如下:</p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                    variable_name = open('file_name', 'mode')
                    </code>         
                </pre>
                <p>variable_name: 自訂變數名稱、 file_name :自訂檔案的檔名、mode :檔案運作的屬性</p>
                <div class="row">
                    <div style="margin-right: 80px;" class="col-3">
                        <h6>表 9-1 文字檔模式</h6>
                        <hr>
                        <table class="table text-center " border="3" >
                            <thead class="thead-light">
                                <tr>
                                    <th>運作屬性</th>
                                    <th>說明</th>
                                </tr>
                                <tr>
                                    <td>w</td>
                                    <td>寫入</td>
                                </tr>
                                <tr>
                                    <td>r</td>
                                    <td>讀取</td>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>附加</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="col-3">
                        <h6>表 9-2 二進位檔模式</h6>
                        <hr>
                        <table class="table text-center " border="3">
                            <thead class="thead-light">
                                <tr>
                                    <th>運作屬性</th>
                                    <th>說明</th>
                                </tr>
                                <tr>
                                    <td>wb</td>
                                    <td>寫入</td>
                                </tr>
                                <tr>
                                    <td>rb</td>
                                    <td>讀取</td>
                                </tr>
                                <tr>
                                    <td>ab</td>
                                    <td>附加</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <p>也可以用以下語法打開檔案:</p>
                <h4>語法:</h4>
                <pre class="wp-block-fm-prism line-numbers">
                    <code class="language-python">
                    with open('name.dat', 'w') as outfile:
                    </code>         
                </pre>
                <h3 id="9-2">9-2 檔案資料得寫入與讀取</h3>
                 <h6>表 9-1 文字檔案的存取函式</h6>
                        <hr>
                        <table class="table text-center " border="3" >
                            <thead class="thead-light">
                                <tr>
                                    <th>文字檔案的存取函式</th>
                                    <th>說明</th>
                                </tr>
                                <tr>
                                    <td>write</td>
                                    <td>寫入</td>
                                </tr>
                                <tr>
                                    <td>read()</td>
                                    <td>讀取檔案所有內容</td>
                                </tr>
                                <tr>
                                    <td>readline()</td>
                                    <td>從檔案中讀取一行</td>
                                </tr>
                                <tr>
                                    <td>readlines()</td>
                                    <td>讀取檔案所有內容</td>
                                </tr>
                                <tr>
                                    <td>read(n)</td>
                                    <td>從檔案中讀取n個字元</td>
                                </tr>
                            </thead>
                        </table>
                        <P>將內容寫入檔案的程式碼如下:</P>
                        <h4>範例程式:</h4>
                        <pre class="wp-block-fm-prism line-numbers">
                            <code class="language-python">
                                def main():
                                    outfile = open('fruits.dat', 'w')
                                    #write data to the file
                                    outfile.write('Banana\n')
                                    outfile.write('Grape\n')
                                    outfile.write('Orange\n')
                                    outfile.close()
                                
                                main()
                            </code>         
                        </pre>
                        <p>使用open函式打開檔案，並利用write函式將內容寫入檔案中，最後利用close函式關閉檔案。</p>
                        <p>如果再從新執行上述的main()方法會把之前的寫入的內容覆蓋掉，此時利用以下方法:</p>
                        <h4>範例程式:</h4>
                        <pre class="wp-block-fm-prism line-numbers">
                            <code class="language-python">
                                def main():
                                    outfile = open('fruits.dat', 'a')
                                    #append data to the file
                                    outfile.write('Kiwi\n')
                                    outfile.close()
                                
                                main()
                            </code>         
                        </pre>
