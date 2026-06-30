const CryptoJS = require("crypto-js");
const encryptedDB = {
    "5cd7c4fe6f74cf06f4a5534608b899623e63fcd8136c7d6ffc4a0d5ac23e1c06": "U2FsdGVkX1/+jcN3Fr/04IyglJU06gly2zWzERDYArH6mxeWhm/Iq540hBVwFxoitIyJGYoNcIBGaavDiA57MwvjCYSvRAGzSp/fI3yIv8VQuVUVDAzVuqqmFBNFDu5SYGd2wlLrsWA2ZUvlET2xrG+C4FURN/KZmh0W5KLvOmbjLkpPNUA2p/Us+SciMb+HQclupvDJyTM+GttCM1C71UyU395zpYhOfIA4GARoc2uShsNX/TWNXdCtkUA/8jGM20bkkg2sbeUdT294PhTw3SajmLc7K9v8L44IjQCNyAls9BHBysC7WgO8o6Qlu3HskKuAagxv/fLhz19AIR4Akb9wGvZvIVyttRCkaBfEysjzczgZaMYpOLr/ZushNwuJItqlRxCYBTu2zI8SPbbVrZ798JBQAe4rgSHLcWp6w5XBG+iBQVZa9sOOEQno+VU1SJ7TRWXcV3FGk6Yp8MfHh7rtcVfj88Xawz3m4v1UC0RTol2iFoXdQQowmXqPiQHJxxDwbRcswWv4uE5zVlwVxpjzD7SVxkXunN0HZp/XmNIiyaO5bXtg/gxvwJzKfBbwjcAdu1vCfSXXRvo3VqMxy71G8/9xcBn8U3qKAGozRIP6JLTXIEYWkNA2Ff1IDRGqv5oFKe8/O1byWQEfGpr5t25lgx+iOMT57uhFCw+M9KamiD0I/agxP5SKAI0blJbb7b/Q3gXBSxXvdhKAfzVSllv5dPx2+ErBt0bXEjdclhGOj61CnO327qhHH2zq6UY5nk6pWzgJ5ESg23y6WS7gMW3aIQ2+kWV0pnVdAuHbtncjxo4j91Ww7NcLJ1hBMU/7560IfFMn/9X6diFbQhIiS2cRExnfPLDIXbO1B+4RecSpvcoGbjEJe7q0MV5X4kqUSN/tKtsIO/a7hlUJf6abiAiQ4caPc5hH5YGhs63rbkWjR+sVz+jyo/TuOISdG5d73vqdXYvcKeTUzZ0C5Nt5LJLJqXInShH7PAHka6SpjtpbdXXuFajjlRPTEXflwlXqkyYk3Yr86OGV9l1gszAEO62MxogspECKR/BXn7w4xiToLRpxzuHa9i48IdJk0EW8gD3HZIGRLK/gLnpBoY2XMcdcET/zKH8nWzbn/MSWXDrEf/YRwXDY0rh8IKb2dlmG9preh0oovHD3F3Qr7DXrievuE0DHnSv01vfNXYp+B0XGIiP8un4FPoNZ3+x+0BRRU40Je6oety/1onZSH+HC0iftl8xwtOwRgZZAZjH7OMkQuApWX7G6J9HunvHf4g3KHpZeUsYJvkWm7SGStlqjJZJEbrs/u2MHBUV4oeisNSg+fC2F8EbgIjFXgTkaxc1uZPQoSQHrHUhAQbgfEIrefc0WexTiQmtChTOIXCUDME8KzxrsF5e5apxV/XGUaHXJYbjwzIL4aox8W0Rp7FJI+A==",
    "403a928582a6b3b0324e91d1805777ef96d49b7cd15607f285d673270d553412": "U2FsdGVkX19iK6Xn5qSm7qfHMfHUkzunMa+MXlC36oMyhVlAfVcfAKiYfsZzF3NO8SAdCfUI2cHu9mL9g+R2Ci6VMcDmFGSZ5+bbyyJbZJsSkxewyYJI2jiT93CziTF0RNDYyihWhadY7hiuXBwbhkRkLjJliy6/N2P/Rv1Y71CqbhsO3U3CRPO6pzOVhLW6wqVisq02QJGLS3Zp3IgOsfA4iitYQBdwDUblHLDLED5/CmRRNDYZc8mgnfQH7D0RjR1UYV8RbH1nogmxD7qb5CtnY0eP6WzexJUY3GUVXz5w4PopXT7AIQ/IiBtvpFWmUBDLMgdHlJ9tjIK6mL3lnex/uS0EROaz7cAg0YPK6ijotN77KakRABBhNwhtCIBpYuVu3Pyo9TSVP0ULNTbGcWZoCgvPR+cAfCBkRchl9Gfd16K252HZU/lKj9SMo35qaqB5XPH5EnYc3xOCkpbk+8zlDlEn6UxGmCY+guTBMxOJy+77N3oILclzC5KH+4wkVTatPGGNvFfq519GKt503Ut1YPP6d+7z/wJGO1S5PZpsNb6t8eottSQgVNbj68jFOx/aaQTkYXBbBK5EfVDNE1VcCX3NvoLJ56OsYR9LIw4kev23hDyrj7lr3CjIZliPzVxk5Hi2nhN26y5MoXuTJ/HWxN/M7qqLMzAl1NnK4RFU6GF61H7xT0klVbaYAade1PCbB8fi9b/I6XSitteOrtz6GppwaZRZjgQC+GRt/O1gtfMBT3kEhKqybJBsUBAPALeKdj6cC5beg9/Nc/ZEcwUwIBlD/emA+FuwSIhceYr1saQcv3l8SAauImrW0DVzeTnyWpd7vprcq9zg23r+4mTGelbgeHvPdiH4rwCt9ygzWYazYLkfZ8gj6XpIgHvwgXdAXqztdalwDjPuXsULswlVEdQMI4pRb/zJmDGk2iWtuJDGA/Tai4hRbafhBsWrmdwI8C+jqoa5FP95Jor1K+O1fXCEYJ/OkaJB1zMSkXCY4lb+V+kIYdksLGZPGnBZm9m1GZ56bIaL4hAfBx6mefMsvbQNJBE395QgLA41Or14NeKkfQowCl1+eqpaN+rk1RvGpfYtG6wtj/6MSPFpNfeV/eo3EFsSL4wOHMpHMdkZtSlZsZLZmTrbX81ajZpNcm3s2oV7dKqWy5BU1yPLTIu1d1uKem4GK0EBZx0qBo3GPiJIx/V6viktxj17nIr8atJ/sjKqITOb7W/n8iOJB1ZUwNXf2o007WF4KxqQ6sAU2f5pV/ngtn7buMFz+PcoZhdU9a3YLzyZCR7LidftDabtUXBXRR1oUe9GlmsWSoB9naKxbNvV82QPXHUCJMCq7/zaZ6ebe3givuLGDMHfSXqd8wXFDSnmKP+HpkkQvWyIqautJiVSiyg92G1OelOb",
    "9880a11702a0fdd064154b17df6eb0e07b7364968a2c86197b51a7328dd53c41": "U2FsdGVkX18A1yLdL49y4MDxrJPYFzueXbNNUIesNkG+7kngZ0HC0p92BQOEDvt80mECrv0oxgDvLATTnm2t5zbOw+IhKWN+bhGpw5UxzlDRpjaQH6dYHcUkHh+KyjkpyM8dVh76TzIUd3ekLFh0yQaBEvopMKtGxO+QdHpTWZloTn966Xn8cOHfNdWTC4UHVtxnDjN1O9q/Mtfh+TDsNe84+KUHJTruYqMSfXu+Prx6QJhvxDr5rqtGNU67ScV15mGKTz7z+i4NXEBxdecgmkQdLxFX6d/hroNWRm4zAMtcOoHhR4WZdtI0wsv4alznGhUR0Gu5/5F+8CEWwdqsdJUF9WGTLhY7fvvFCfyqc9fiCFO2mMbu7zLeqGfD2Xzg7e1pUXglhoAm8bngzr9YUXslqniWZPozCmHvJyVIUtAUJcGAVN0ZAJSb2gOk9Yh2cs/eH9EHbfMV5huWs4D5sPxYOv1xH0D08fq7ETQ2mskJzibrPmOyqImoqL672hT3qYB3eEUYPe30EtQHF775aeIfhXD0tCHT/Kdnec9UPGx91Q4tC6whAybqa360Ffx+g2pCsnuecINS56VC3zKGPJIIkM1RgBaL0dcYkDFnGOW42iqmtcx9Xksr+GKspXA0PtfNo0WH2c8b49j/lms6d458hnyHhG9bvcG6JAiEUs8VtPYBmIxcLIeCM2Wr8cywbOS7AgMh8gmJx/SyXNY1hi BRJMB5EQOtl4XrAIBXSom00JHVTqAplQNZZzy9pt9uvQZnB9Sad5F2YadGzrqLErczLsNna9EHA57YC5Ony5LAsFdasuggLnzYLpZhideoSMJNwMVaDubcpb1ODmpKy5SeI2HFWM7yfDZ5VUkpkUXyf9MfxhPU/QvZf5wHWK5TxnSpzi/ZMtL7auXSwYcCoUHAqjMb2ZlipmslAKPVify/um2BkatpdirkrIZDB/YZ1gGP/rWv+9USbrw2oe491QNB1ohYcqW67pkIkklDZR958T5/3oEjnfFpJJIQQ/ffKY2155Njg/0o1YyuRLfZUmty7wlnbdgewhnBa510fwOOzYRe1Ck4GnS1xXOmIBcUl4kTPyfz//AHLJ/RbW1y4kFhpGYzTnItJ1pIg7MjPh3jS7ICexuL+kseLJD1qosBRk7JFuqBBCxQgi7bbDD2FcUPp4+VmcYcB2RoytbFQeHzSjLAN+lL1Ppd3N0jMJ2tAU+VDI9j+Nbz5uAFlpO2XZVOgNx/Iwfsissy7mQ193bxA688ZUkZILkIl+3+8TboZ3KaCoZB2OpQ0R1ajoJdLhkDM3UaX1E13zx2+WppURE8FN/N5KUo/8RlbPkzfE6B0E2RmSk+J3WKWiYgYLsEOmY8M+NjRTx2wY9NSupL9uWEdByrVq6btE4ABTlAEc17Tn/DumZskGPADRk1zHR5YNdxZznjXOYLY85y9d+bqAqlPy/B7Ilbns4m/pm3oDTnbTOGL11S56LXJMbGGpY/bSfaHbzQJ3vrv5j08xBqL54=",
    "b3ca34e44d8e15e5f4001320329d6060ce6bf272895ee70ae5e395c3f607e5c4": "U2FsdGVkX1+CfnOxvVn6gbqZdWDUY5CDiYsMfcp/lAVHHoi965o6qWLy8eIFxo2i0+K9nCl/5/Tg2wKDX/kQ/X/UseLvIauqY3oJzFy6DNzMv4iJQzYIlg0kM6rRwVgq7i5B5G/wBI196KvYM0Js15djcUMMbBB2XMLYHmqWNDL4qHv0PFnpYk0LrzPmjD3GZYbE4PWkMC01ubZHbJeC+WjdjvB/EfPN6dsOjcioL9aCdJdbx5gCWxqcBRsRp140eFUYmezZPVKB2xJD4A+/ygxuDV71OJGnUbsZNUNQGxmUKHwmiAvE3sDJDQ4Aqu2wVzQCxodO40bpmh8g7qCMQppv9jKB4P+1EAdLs9vdBHLDimMgjbGGUuTlVC66HONJt7kqdmHobsMaTDNFfcpOnASDIDR15vTdr4rN0PujJgb9CJoU5hy/OLHqlUC4Pk0Xn7vR+lHDSnfV0vALvgv+e5zustZ11lWKeEiaVc3iFpXiyNatV2Yih/n8oo2TL1lDq/tJLPMF47PjzZ9tohvJeg5glsFjqezxh8oysbTphTV3im6QmAGPbpMxfG05yIWNIG6WjPZ6DgrUbmFfX4afoyjNi3Iwf/X76WOzxqfJsp6Jh2CtxEGBLkiNwQapJEv2MVOOA1zITlfrOBdPGOKkZ945NkezkatwAFuYVnY6ew4JCsDjnx6gRkO+L37XidUKJkS/guRNtJ1ZWrGZMICAV5PF7o0J7WYD9d0gUyROqURPFL6Dd3P9ThMCfZ9R/6yZn8m0enF/qfoDg/fL7WTrxxmTeXniMHorVjkYkInJ6YXwIRrdYysesV5Y4BxiZU1yWoSxb8RY1kI+dOAMFsqQwWHSOT1FRrMeScQhZnqK0uM5aCmsEAceZiGaSIdGbZ9EodPhOK9B7GU/x+fMorXfn0Ya18c09bi4Od3xvdrcgvTUv4ReFb+jMPB5i39n3qvwfaPNMaxV4X5m/aKAnPWIChTXm8OrwMS+TIrD9GGQKq5yYJfDNsuts/imXePpqi9L4Wr9Vm0U1gAxawD4ToQS4+f9yP6uxYZtttnJL1Ot3TFpcDH+VrDwHhVBIWs1ABrCBZYa1yVSeBbbVnCXV7ObGoapDv5i2TKSilQL2/rN+jPQqjLmVhoMgql1MQML49g12pN7HiCVjSHrEk4f03SbhQ7JRDafCyxHFyBCEiOCmjL/FQZtsiRBoIyUikbnosdIDPOGbOxaZmYwPPorEozXjPCbquSNrUMcRezmb/nKntPGvvieR4wbxglf6a8o6cX0/v0ZJmQxbKWHhYAQgRS0fBZH8/K41uk+d6m7Bz9vDe2pFzIvnF0qtDqcm/6s7wcxfSIX8FuhsRVaLzIctIkeoMSvUGfp2UCiO3b1xUxGEUrUKlWBV65TtXCp9ZWE49A"
};

const keys = [
    "JULIA-PART1-98241", 
    "ALEJANDRO-MARIA-PART1-35791",
    "ARIANA-PART1-24680",
    "MARTA-PART1-13579"
];

keys.forEach(k => {
    let hash = CryptoJS.SHA256(k).toString();
    if(encryptedDB[hash]){
        let dec = CryptoJS.AES.decrypt(encryptedDB[hash], k).toString(CryptoJS.enc.Utf8);
        
        let obj = JSON.parse(dec);
        let changed = false;
        
        // Find if any file has the wrong ROT13 string
        for(let f in obj.files){
             if(obj.files[f].includes("rapbagezbf")){
                  obj.files[f] = obj.files[f].replace("rapbagezbf", "rapbagerzbf");
                  changed = true;
             }
             if(obj.files[f].includes("dhrefvn")){
                  obj.files[f] = obj.files[f].replace("dhrefvn", "dhrevn");
                  changed = true;
             }
        }
        
        if (changed) {
             let newEnc = CryptoJS.AES.encrypt(JSON.stringify(obj), k).toString();
             console.log("=== KEY TO REPLACE IN SCRIPT.JS ===");
             console.log("HASH:", hash);
             console.log("NEW BASE64:");
             console.log(newEnc);
        }
    }
});
