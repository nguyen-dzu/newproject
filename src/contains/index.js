const role = {
  admin: "admin",
  user: "users",
};

const getData = async (url) => {
  const data = await fetch(`${url}`);
  return data;
};

function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}
export { getData, role, uuid };
