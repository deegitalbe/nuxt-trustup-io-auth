locals {
  local_env = {
    APP_PORT = lookup(data.doppler_secrets.local.map, "APP_PORT", data.doppler_secrets.ci_commons.map.LOCAL_APP_PORT)
    WEBSOCKET_PORT = lookup(data.doppler_secrets.local.map, "WEBSOCKET_PORT", data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT)
  }
}