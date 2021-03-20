export const normalize = (entities: Array<{ id: string }>) =>
  entities.reduce((acc, entity) => {
    return {
      ...acc,
      [entity.id]: entity,
    }
  }, {})

// Converts a base64 string into a URL which can be used throughout the app
// during runtime
export const base64ToURL = async (base64: string) => {
  const base64Blob = base64 ? await (await fetch(base64)).blob() : ''
  const base64Url = base64Blob ? window.URL.createObjectURL(base64Blob) : ''

  return base64Url
}

export const asyncMapBase64ImagesToURLs = async <T extends { image: string }>(
  objects: T[]
): Promise<T[]> => {
  return Promise.all(
    objects.map(async (object) => {
      const { image } = object

      const imageUrl = await base64ToURL(image)

      return {
        ...object,
        image: imageUrl,
      }
    })
  )
}
