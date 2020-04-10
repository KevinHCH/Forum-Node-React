export async function getJSONData(url, body="") {
  const finalUrl = `${url}/${body}`
  const token = localStorage.getItem("token")
  const res = await fetch(finalUrl, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  const { data } = await res.json();
  // await this.setState({ posts: data });
  return data;
}
