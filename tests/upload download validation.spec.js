const exceljs = require('exceljs');
const { test, expect } = require('@playwright/test');
 
async function writeExcelTest(searchText,replacedText,change,filePath)
{
     const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);
    const output = await readExcelTest(worksheet,searchText);
    const cell = worksheet.getCell(output.row,output.column+change.changeColumn);
    cell.value = replacedText ;
    await workbook.xlsx.writeFile(filePath); 

}
async function readExcelTest(worksheet,searchText)
{
    let output = {row:-1, column:-1};
    worksheet.eachRow((row,rowNumber) => 
        {
        row.eachCell((cell,colNumber) =>
            {
            if(cell.value === searchText)
            {
                output.row= rowNumber;
                output.column= colNumber;
            }

        
        })
    })
    return output;
}

//writeExcelTest('Banana','2614',{changeRow:0,changeColumn:2},"\\Users\\Alana Reddy\\Downloads\\download.xlsx");
 test('upload download validation',async ({page})=>{
    const textSearch = 'Banana';
    const updateText = '2614';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Download'}).click();
    await downloadPromise;
    writeExcelTest(textSearch,updateText,{changeRow:0,changeColumn:2},"\\Users\\Alana Reddy\\Downloads\\download.xlsx");
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles("\\Users\\Alana Reddy\\Downloads\\download.xlsx");
    const textLocator = page.getByText(textSearch); 
    const desiredRow = page.getByRole('row').filter({has: textLocator});
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateText);
    
    



    






    
});