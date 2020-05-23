(async () => {

const formData = new FormData();
formData.append('client_id', 241713833746883);
formData.append('client_secret', '6548cdc412507b7b7468e0eca685a004');
formData.append('grant_type', 'authorization_code');
formData.append('redirect_uri', 'https://lucydeburgh.co.uk/');
formData.append('code', 'AQCsWtrwjvQujTLOfEYMfpd4dBrCEojbqGiruE7-SlqDkc_RAr1nXHYYWayOrB-IB8QXUajF3xewLV1HzG7mnVf5iY6AgoVUHbiNXs0l2DlfLCGP5F9AI2cLOd0B6jzpuSZHngS7adUXRSm7iokOCuJeKYUY-XLGCZNmF4fNKOixXm6TffIQDXfq_JI8HvKh1w2nDEo22L0R4MOcsUdZQu2Ipwe9Mqf87_owEF3-6hhZAw');

const authResponse = await fetch(
    'https://api.instagram.com/oauth/access_token',
    {
        method: 'POST',
        body: formData,
    },
)

const { access_token, user_id } = await authResponse.json();

console.log(access_token, user_id );

})();

// curl -X POST \                  
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=241713833746883 \
//   -F client_secret=6548cdc412507b7b7468e0eca685a004 \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://lucydeburgh.co.uk/ \
//   -F code=AQCsWtrwjvQujTLOfEYMfpd4dBrCEojbqGiruE7-SlqDkc_RAr1nXHYYWayOrB-IB8QXUajF3xewLV1HzG7mnVf5iY6AgoVUHbiNXs0l2DlfLCGP5F9AI2cLOd0B6jzpuSZHngS7adUXRSm7iokOCuJeKYUY-XLGCZNmF4fNKOixXm6TffIQDXfq_JI8HvKh1w2nDEo22L0R4MOcsUdZQu2Ipwe9Mqf87_owEF3-6hhZAw

// https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=