import { firestore } from '../firebase'

export const createLabel = (info) => {
  console.log(info)
  return (async () => {
    try {
      const labelsRef = await firestore.collection('label').orderBy('id', 'desc').limit(1).get()
      const data = labelsRef.docs.map((doc) => doc.data())

      const id = data.length === 0 ? 0 : data[0].id + 1
      const infoData = { ...info, id }
      await firestore.collection('label').doc(`${id}`).set(infoData)
      return infoData
    } catch (error) {
      return error
    }
  })()
}

export const getLabel = () => {
  return (async () => {
    try {
      const labelsRef = await firestore.collection('label').orderBy('id', 'desc').get()
      const data = labelsRef.docs.map((doc) => doc.data())
      return {
        data,
      }
    } catch (error) {
      return error
    }
  })()
}

export const updatelabel = (data) => {
  return (async () => {
    try {
      await firestore.doc(`memos/${data.id}`).update(data)
      return {
        data,
      }
    } catch (error) {
      return error
    }
  })()
}

export const deletelabel = (id) => {
  return (async () => {
    try {
      await firestore.doc(`memos/${id}`).delete()
      return {
        meta: id,
      }
    } catch (error) {
      return error
    }
  })()
}
