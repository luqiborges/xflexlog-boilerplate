import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as RNFS from 'react-native-fs';

import RNFetchBlob from 'rn-fetch-blob';

export default function Home() {
  const [downloaded, SetDownloaded] = useState([{}]);

  function writeTeste() {
    const { fs } = RNFetchBlob;
    const { DownloadDir } = fs.dirs;
    const contentJSON = JSON.stringify(downloaded);
    var path = DownloadDir + '/novoExport.json';

    RNFS.writeFile(path, contentJSON, 'utf8')
      .then(response => {
        console.log('Conseguimos criar o novo arquivo.');
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  }

  // File Upload
  function uploadTeste() {
    const { fs } = RNFetchBlob;
    const { DownloadDir } = fs.dirs;
    var uploadUrl = 'http://ptsv2.com/t/cill0-1621517618';
    var files = [
      {
        name: 'exportUpload',
        filename: 'novoExport.json',
        filepath: DownloadDir + '/novoExport.json',
        filetype: 'text/json',
      },
    ];
    var uploadBegin = (response: any) => {
      var jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };
    var uploadProgress = (response: any) => {
      var percentage = Math.floor(
        (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
      );
      console.log('UPLOAD IS ' + percentage + '% DONE!');
    };
    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      fields: {
        hello: 'world',
      },
      begin: uploadBegin,
      progress: uploadProgress,
    })
      .promise.then(response => {
        if (response.statusCode == 200) {
          console.log('FILES UPLOADED!');
          console.log(response.body); // response.statusCode, response.headers, response.body
        } else {
          console.log('SERVER ERROR');
        }
      })
      .catch(err => {
        if (err.description === 'cancelled') {
          // cancelled by user
        }
        console.log(err);
      });
  }

  function readInside() {
    const { fs } = RNFetchBlob;
    const { DownloadDir } = fs.dirs;

    RNFS.readFile(`${DownloadDir}/jsonTeste.json`, 'utf8')
      .then(response => {
        const letsSee = JSON.parse(response);
        SetDownloaded(letsSee);
        console.log(downloaded);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  }
  //DownloadFiles - RNFetchBlob
  function downloadTeste() {
    const { config, fs } = RNFetchBlob;
    const date = new Date();

    const { DownloadDir } = fs.dirs;
    const options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${DownloadDir}/jsonTeste.json`,
        description: 'Downloading',
      },
    };
    config(options)
      .fetch(
        'GET',
        'https://raw.githubusercontent.com/Maujor/json/master/db.json',
      )
      .then(res => {
        console.log('Baixou certinho!');
      });
  }

  return (
    <View>
      <TouchableOpacity onPress={writeTeste}>
        <Text>APERTA PARA EXPORTAR O ARQUIVO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={readInside}>
        <Text>APERTA PARA LER O ARQUIVO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={downloadTeste}>
        <Text>APERTA PARA DAR DOWNLOAD NO ARQUIVO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log(downloaded)}>
        <Text>APERTA PARA MOSTRAR O OBJETO ARQUIVO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={uploadTeste}>
        <Text>APERTA PARA DAR UPLOAD NO ARQUIVO!</Text>
      </TouchableOpacity>
    </View>
  );
}
