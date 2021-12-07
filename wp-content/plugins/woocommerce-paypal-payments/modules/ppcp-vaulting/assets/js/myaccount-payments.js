(()=>{var __webpack_modules__={864:function(){eval("document.addEventListener('DOMContentLoaded', () => {\n  jQuery('.ppcp-delete-payment-button').click(async event => {\n    event.preventDefault();\n    jQuery(this).prop('disabled', true);\n    const token = event.target.id;\n    const response = await fetch(PayPalCommerceGatewayVaulting.delete.endpoint, {\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        nonce: PayPalCommerceGatewayVaulting.delete.nonce,\n        token\n      })\n    });\n\n    const reportError = error => {\n      alert(error);\n    };\n\n    if (!response.ok) {\n      try {\n        const result = await response.json();\n        reportError(result.data);\n      } catch (exc) {\n        console.error(exc);\n        reportError(response.status);\n      }\n    }\n\n    window.location.reload();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcGNwLXZhdWx0aW5nLy4vcmVzb3VyY2VzL2pzL215YWNjb3VudC1wYXltZW50cy5qcz9hMGIzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImpRdWVyeSIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3AiLCJ0b2tlbiIsInRhcmdldCIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIlBheVBhbENvbW1lcmNlR2F0ZXdheVZhdWx0aW5nIiwiZGVsZXRlIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJub25jZSIsInJlcG9ydEVycm9yIiwiZXJyb3IiLCJhbGVydCIsIm9rIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJleGMiLCJjb25zb2xlIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQ0ksa0JBREosRUFFSSxNQUFNO0FBQ0ZDLEVBQUFBLE1BQU0sQ0FBQyw2QkFBRCxDQUFOLENBQXNDQyxLQUF0QyxDQUE0QyxNQUFPQyxLQUFQLElBQWlCO0FBQ3pEQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQUgsSUFBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhSSxJQUFiLENBQWtCLFVBQWxCLEVBQThCLElBQTlCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsRUFBM0I7QUFFQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUN4QkMsNkJBQTZCLENBQUNDLE1BQTlCLENBQXFDQyxRQURiLEVBRXhCO0FBQ0lDLE1BQUFBLE1BQU0sRUFBRSxNQURaO0FBRUlDLE1BQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRmI7QUFLSUMsTUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FDRjtBQUNJQyxRQUFBQSxLQUFLLEVBQUVSLDZCQUE2QixDQUFDQyxNQUE5QixDQUFxQ08sS0FEaEQ7QUFFSWIsUUFBQUE7QUFGSixPQURFO0FBTFYsS0FGd0IsQ0FBNUI7O0FBZ0JBLFVBQU1jLFdBQVcsR0FBR0MsS0FBSyxJQUFJO0FBQ3pCQyxNQUFBQSxLQUFLLENBQUNELEtBQUQsQ0FBTDtBQUNILEtBRkQ7O0FBSUEsUUFBSSxDQUFDWixRQUFRLENBQUNjLEVBQWQsRUFBa0I7QUFDZCxVQUFJO0FBQ0EsY0FBTUMsTUFBTSxHQUFHLE1BQU1mLFFBQVEsQ0FBQ2dCLElBQVQsRUFBckI7QUFDQUwsUUFBQUEsV0FBVyxDQUFDSSxNQUFNLENBQUNFLElBQVIsQ0FBWDtBQUNILE9BSEQsQ0FHRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkMsUUFBQUEsT0FBTyxDQUFDUCxLQUFSLENBQWNNLEdBQWQ7QUFDQVAsUUFBQUEsV0FBVyxDQUFDWCxRQUFRLENBQUNvQixNQUFWLENBQVg7QUFDSDtBQUNKOztBQUVEQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0gsR0FwQ0Q7QUFxQ0gsQ0F4Q0wiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAoKSA9PiB7XG4gICAgICAgIGpRdWVyeSgnLnBwY3AtZGVsZXRlLXBheW1lbnQtYnV0dG9uJykuY2xpY2soYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGV2ZW50LnRhcmdldC5pZDtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBQYXlQYWxDb21tZXJjZUdhdGV3YXlWYXVsdGluZy5kZWxldGUuZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25jZTogUGF5UGFsQ29tbWVyY2VHYXRld2F5VmF1bHRpbmcuZGVsZXRlLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgcmVwb3J0RXJyb3IgPSBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXhjKTtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iXSwiZmlsZSI6Ijg2NC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///864\n")}},__webpack_exports__={};__webpack_modules__[864]()})();