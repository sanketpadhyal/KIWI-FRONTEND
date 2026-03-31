export const ENGINE_URL = "https://adsync-engine-1005388219451.europe-west1.run.app/engine"

export const pingEngine = async (userId) => {
  if (!userId) {
    return false
  }

  try {
    await fetch(ENGINE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId })
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
