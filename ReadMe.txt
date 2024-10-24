Pour le formulaire: Choix favoris 
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={favorite}
          onValueChange={setFavorites}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Voulez vous l'ajouter comme favoris?</Text>
      </View>



  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },





  Creer RecipeScreen pour l'affichage des recettes NB:il feras office de page d'accueil

  Charger une image depuis sa galerie


  const [fileData, setFileData] = useState(null);
  const [fileUri, setFileUri] = useState(null);

  const renderFileData = () => {
    if (fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./assets/dummy.png')}
        style={styles.images}
      />
    }
  }


  const renderFileUri = () => {
    if (fileUri) {
      return <Image
        source={{ uri: fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('./assets/galeryImages.jpeg')}
        style={styles.images}
      />
    }
  }
  const launchNativeImageLibrary = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } 
    });

  }




<Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
            <View style={styles.ImageSections}>
              <View>
                {renderFileData()}
                <Text  style={{textAlign:'center'}}>Base 64 String</Text>
              </View>
              <View>
                {renderFileUri()}
                <Text style={{textAlign:'center'}}>File Uri</Text>
              </View>
            </View>

            <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={() => {launchNativeImageLibrary()}} style={styles.btnSection}  >
                <Text style={styles.btnText}>Directly Launch Image Library</Text>
              </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
      </Fragment>



      ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  }


Lorem ipsum è un testo segnaposto utilizzato da grafici, progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.[1] È un testo privo di senso, composto da parole (o parti di parole) in lingua latina, riprese pseudocasualmente dal De finibus bonorum et malorum scritto da Cicerone del 45 a.C, a volte alterate con l'inserzione di passaggi ironici. La caratteristica principale è data dal fatto che offre una distribuzione delle lettere uniforme, apparendo come un normale blocco di testo leggibile.

Il testo fu utilizzato per la prima volta nel 1500 da un anonimo tipografo per mostrare i propri caratteri; da allora è diventato lo standard dell'industria tipografica. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni '60, con la diffusione dei fogli di caratteri trasferibili, detti anche trasferelli, e successivamente dai programmi di grafica. La sua funzione lo avvicina al testo ETAOIN SHRDLU un tempo usato per provare le Linotype.[2]

In informatica è usato molto frequentemente come testo riempitivo nelle prove grafiche di pagine web e come dati fittizi nella prova di funzionamento dei database. L'uso di questo espediente, per riempire spazi altrimenti vuoti (spesso in attesa dei dati definitivi), è molto efficace grazie soprattutto all'alternanza di parole lunghe e brevi, punteggiatura e paragrafi. In questo modo viene simulato con sufficiente verosimiglianza l'impatto grafico di un testo reale, in modo particolare per quanto riguarda l'impatto estetico.

Questa consuetudine come testo segnaposto standard ha fatto sì che la maggior parte dei software di grafica e tipografia adottassero funzioni e strumenti di "riempimento automatico", con un'immediata anteprima dello spazio occupato e della resa finale.