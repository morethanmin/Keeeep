import { firestore } from '../firebase'

export const createMemo = ({ info }) => {
  console.log(info)
  return (async () => {
    try {
      const memosRef = await firestore.collection('memos').orderBy('id', 'desc').limit(1).get()
      const data = memosRef.docs.map((doc) => doc.data())

      const id = data.length === 0 ? 0 : data[0].id + 1
      const result = await firestore
        .collection('memos')
        .doc(`${id}`)
        .set({ ...info, id })
      return result
    } catch (error) {
      return error
    }
  })()
}

export const getInitialMemo = () => {
  return (async () => {
    try {
      const memosRef = await firestore.collection('memos').orderBy('id', 'desc').limit(20).get()
      const data = memosRef.docs.map((doc) => doc.data())
      return {
        data,
      }
    } catch (error) {
      return error
    }
  })()
}

export const getRecentMemo = (cursor) => {
  return (async () => {
    try {
      const memosRef = await firestore.collection('memos').where('id', '>', cursor).orderBy('id', 'desc').get()
      const data = memosRef.docs.map((doc) => doc.data())
      return {
        data,
      }
    } catch (error) {
      return error
    }
  })()
}

export const getPreviousMemo = (cursor) => {
  return (async () => {
    try {
      const memosRef = await firestore.collection('memos').where('id', '<', cursor).orderBy('id', 'desc').limit(20).get()
      const data = memosRef.docs.map((doc) => doc.data())
      return {
        data,
      }
    } catch (error) {
      return error
    }
  })()
}

export const updateMemo = (data) => {
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

export const deleteMemo = (id) => {
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
