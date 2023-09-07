export class offerTemplateClass{
    static makeOffer(offer:any){
            // const imageUrl = 'https://images.unsplash.com/photo-1611794485509-701be5a5d4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80';
            const imageUrl = 'https://www.americanoceans.org/wp-content/uploads/2021/06/shutterstock_1938927043-1024x512.jpg';
        return `
  

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>You're Invited!</title>
            <style>
                /* Reset default styles */
                body, h1, p {
                    margin: 0;
                    padding: 0;
                }
                
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5eded;
                }
                
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.938);
                    position: relative;
                }
                
                .header {
                    text-align: center;
                    color:#FFFFFF;
                    margin-bottom: 20px;
                }
                
                .header h1 {
                    color: #ffffff;
                }
                
                .invitation-details {
                    padding: 20px;
                    background-color: rgba(255, 255, 255, 0.9);
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(100px);
                }
                
                .invitation-details h2 {
                    color: #2c3e50;
                    margin-bottom: 10px;
                    font-size: 28px;
                    text-align: center; 
                }
                
                .invitation-details p {
                    color: #555555;
                    font-size: 20px;
                    line-height: 1.6;
                    text-align: center; 
                }
                
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    color: #fdfbfb;
                }
        
                /* Background Image */
                .container {
                    background: url('../../../../Downloads/party.jpg') no-repeat center center;
                    background-size: cover;
                }
        
                /* Animation */
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
        
                .animated {
                    animation: fadeIn 1s ease-in-out;
                }
    </style>
</head>
<body>
<div class="container animated" style="background: url('${imageUrl}') no-repeat center center; background-size: cover;">
    <div class="container animated">
        <div class="header">
        <h1>Offer Alert</h1>
            <p><h2><strong>Welcome to an extraordinary celebration of joy and togetherness.</strong></h2></p>
        </div>
        <div class="invitation-details">
            <h2>Offer Details</h2>
            <p><strong>Name:</strong> ${offer.Offer_name}</p>
            <p><strong>Description:</strong> ${offer.Offer_description}</p>
            <p><strong>Offer Start:</strong> ${offer.Offer_start_date}</p>
            <p><strong>Offer End:</strong> ${offer.Offer_end_date}</p>
        </div>
        <div class="footer">
            <p><h2><strong>If you have any questions, please contact us at bharatannd2000@gmail.com</strong></h2></p>
        </div>
    </div>
</body>
</html>

        `;
    }
}
