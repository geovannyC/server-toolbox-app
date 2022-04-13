const input_value_schemma_builder = `file,text,number,hex
test9.csv,wlNbV
test9.csv,WMCfumwkNyQw,3209033116,ca41a44095e4eb32e2bc648579462c2a
test9.csv,gjveYNELHLCZVfnbYLoUqJnvZzVMW,73,9051217451d0a0991341045f0a27936c
test9.csv,JNxFqX,57,f7216ee5472be1262b06800a1dec618a
test9.csv,BlbvEiHi,1771,ec1084224126703dcb1ba317775f3bdb
test9.csv,JtlXqhBJV,969,31a9a4a25fb63e95875410efd18daa34
test9.csv,NbkYiEgaOFmKECSamGzdby,143,a6181b2ab56dc92482e1503792760d05
test9.csv,icTDigTavBunYdaeBsxXbwy,96,aed7030e96decbca7f8cc26dff6a7626
test9.csv,lZ,843514,bd2e774ef136d109bdce087794c071b4,,
test9.csv,leuHF
test9.csv,nunw,61786654646904275346970688838052,5dccb0a7135c1b20ad93a86eaacaf3f5
test9.csv,AluXOYrzSIdjCKpt,8183644,d6f9d1aac0615075bcdf176a9e2f4b09`
const expected_schemma_builder = {
    file: 'test9.csv',
    lines: [
      {
        text: 'WMCfumwkNyQw',
        number: '3209033116',
        hex: 'ca41a44095e4eb32e2bc648579462c2a'
      },
      {
        text: 'gjveYNELHLCZVfnbYLoUqJnvZzVMW',
        number: '73',
        hex: '9051217451d0a0991341045f0a27936c'
      },
      {
        text: 'JNxFqX',
        number: '57',
        hex: 'f7216ee5472be1262b06800a1dec618a'
      },
      {
        text: 'BlbvEiHi',
        number: '1771',
        hex: 'ec1084224126703dcb1ba317775f3bdb'
      },
      {
        text: 'JtlXqhBJV',
        number: '969',
        hex: '31a9a4a25fb63e95875410efd18daa34'
      },
      {
        text: 'NbkYiEgaOFmKECSamGzdby',
        number: '143',
        hex: 'a6181b2ab56dc92482e1503792760d05'
      },
      {
        text: 'icTDigTavBunYdaeBsxXbwy',
        number: '96',
        hex: 'aed7030e96decbca7f8cc26dff6a7626'
      },
      {
        text: 'nunw',
        number: '61786654646904275346970688838052',
        hex: '5dccb0a7135c1b20ad93a86eaacaf3f5'
      },
      {
        text: 'AluXOYrzSIdjCKpt',
        number: '8183644',
        hex: 'd6f9d1aac0615075bcdf176a9e2f4b09'
      }
    ]
  }
const input_value_filter_valid_lines = "          test9.csv,lZ,843514,bd2e774ef136d109bdce087794c071b4,,"
const input_value_2_filter_valid_lines = "     test9.csv,WMCfumwkNyQw,3209033116,ca41a44095e4eb32e2bc648579462c2a"
module.exports={
    input_value_schemma_builder,
    expected_schemma_builder,
    input_value_filter_valid_lines,
    input_value_2_filter_valid_lines

}